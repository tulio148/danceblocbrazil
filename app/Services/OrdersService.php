<?php

namespace App\Services;

use App\Models\Bundle;
use App\Models\Orders;
use Square\Models\Order;
use Square\SquareClient;
use Illuminate\Http\Request;
use Square\Models\OrderSource;
use App\Services\StudentService;
use Square\Models\OrderLineItem;
use Square\Models\CreateOrderRequest;
use Square\Models\UpdateOrderRequest;
use Square\Models\OrderLineItemDiscount;

class OrdersService
{
    public function create(Request $request)
    {
        $class_id = $request->id;
        $items_ids = [$class_id];
        $orderLineItems = [];

        $idempotency_key = uniqid();

        $client = app(SquareClient::class);
        $user = auth()->user();
        if (!$user->student_id) {
            app(StudentService::class)->store($user);
        }
        $source = new OrderSource();
        $student_id = auth()->user()->student_id;

        foreach ($items_ids as $item) {
            $orderLineItem = new OrderLineItem(1);
            $orderLineItem->setCatalogObjectId($item);
            $orderLineItem->setItemType('ITEM');
            $orderLineItems[] = $orderLineItem;
        }

        $line_items = $orderLineItems;
        $order = new Order(env('VITE_SQUARE_LOCATION_ID'));
        $order->setSource($source);
        $order->setCustomerId($student_id);
        $order->setLineItems($line_items);

        $body = new CreateOrderRequest();
        $body->setOrder($order);
        $body->setIdempotencyKey($idempotency_key);

        $api_response = $client->getOrdersApi()->createOrder($body);

        if ($api_response->isSuccess()) {
            $total_money = $api_response->getResult()->getOrder()->getTotalMoney()->getAmount() / 100;
            $order_id = $api_response->getResult()->getOrder()->getId();
            $items = $api_response->getResult()->getOrder()->getLineItems();

            $uids = [];
            foreach ($items as $item) {
                $uids[] = $item->getUID();
            }

            Orders::create(
                [
                    'id' => $order_id,
                    'student_id' => $student_id,
                    'items_ids' => json_encode($items_ids),
                    'items_uid' => json_encode($uids),
                    'order_total' => $total_money
                ]
            );
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }

    public function update(Orders $order, Request $request)
    {
        $class_id = $request->id;
        $items_ids = [$class_id];
        $orderLineItems = [];

        $student_id = auth()->user()->student_id;
        $idempotency_key = uniqid();

        $client = app(SquareClient::class);
        $user = auth()->user();
        if (!$user->student_id) {
            app(StudentService::class)->store($user);
        }
        $source = new OrderSource();

        if (in_array($class_id, json_decode($order->items_ids))) {
            return;
        }

        $current_items_ids = json_decode($order->items_ids);
        $combined_items_ids = array_unique(array_merge($current_items_ids, $items_ids));
        $bundles = Bundle::all();

        $discounts = [];

        foreach ($bundles as $bundle) {
            $bundle_items_ids = json_decode($bundle->items_ids);

            sort($bundle_items_ids);
            sort($combined_items_ids);

            if ($bundle_items_ids == $combined_items_ids) {
                $discount = new OrderLineItemDiscount();
                $discount->setCatalogObjectId($bundle->discount_id);
                $discount->setScope('ORDER');
                $discounts[] = $discount;
            }
        }

        foreach ($items_ids as $item) {
            $orderLineItem = new OrderLineItem(1);
            $orderLineItem->setCatalogObjectId($item);
            $orderLineItem->setItemType('ITEM');
            $orderLineItems[] = $orderLineItem;
        }

        $square_order = new Order(env('VITE_SQUARE_LOCATION_ID'));
        $square_order->setSource($source);
        $square_order->setCustomerId($student_id);
        $square_order->setLineItems($orderLineItems);
        $square_order->setDiscounts($discounts); // Add the discounts to the order
        $square_order->setVersion($order->version);

        $body = new UpdateOrderRequest();
        $body->setOrder($square_order);
        $body->setIdempotencyKey($idempotency_key);

        $api_response = $client->getOrdersApi()->updateOrder($order->id, $body);

        if ($api_response->isSuccess()) {
            $items = $api_response->getResult()->getOrder()->getLineItems();

            $total_money = $api_response->getResult()->getOrder()->getTotalMoney()->getAmount() / 100;
            $discount_total = $api_response->getResult()->getOrder()->getTotalDiscountMoney()->getAmount() / 100;

            $uids = [];
            $ids = [];
            foreach ($items as $item) {
                $uids[] = $item->getUID();
                $ids[] = $item->getCatalogObjectId();
            }
            $order->items_ids = json_encode($ids);
            $order->items_uid = json_encode($uids);
            $order->version = $api_response->getResult()->getOrder()->getVersion();
            $order->order_total = $total_money;
            $order->discount_total = $discount_total;
            $order->save();
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }


    public function delete(Orders $order, Request $request)
    {

        $class_uid = $request->uid;
        $student_id = auth()->user()->student_id;
        $idempotency_key = uniqid();

        $client = app(SquareClient::class);

        $square_order = new Order(env('VITE_SQUARE_LOCATION_ID'));
        $square_order->setCustomerId($student_id);
        $square_order->setVersion($order->version);

        $fields_to_clear = ["line_items[{$class_uid}]", "discounts"];

        $body = new UpdateOrderRequest();
        $body->setOrder($square_order);
        $body->setFieldsToClear($fields_to_clear);
        $body->setIdempotencyKey($idempotency_key);

        $api_response = $client->getOrdersApi()->updateOrder($order->id, $body);

        if ($api_response->isSuccess()) {
            $items = $api_response->getResult()->getOrder()->getLineItems();
            $total_money = $api_response->getResult()->getOrder()->getTotalMoney()->getAmount() / 100;
            $uids = [];
            $ids = [];
            if ($items) {
                foreach ($items as $item) {
                    $uids[] = $item->getUID();
                    $ids[] = $item->getCatalogObjectId();
                }
            } else {
                $order->delete();
                return;
            }
            $order->items_ids = json_encode($ids);
            $order->items_uid = json_encode($uids);
            $order->version = $api_response->getResult()->getOrder()->getVersion();
            $order->order_total = $total_money;
            $order->discount_total = null;
            $order->save();
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }
}
