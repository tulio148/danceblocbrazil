<?php

namespace App\Http\Controllers;

use App\Models\Terms;
use App\Models\Orders;
use App\Models\Classes;
use Illuminate\Http\Request;
use App\Mail\OrderConfirmation;
use App\Services\PaymentService;
use App\Services\StudentService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $payment = app(PaymentService::class);
        $result = $payment->pay($request);
        if ($result == "success") {
            app(StudentService::class)->addClass($request);

            $orderId = $request->input('id');
            $order = Orders::find($orderId);

            $itemIds = json_decode($order->items_ids, true);
            $itemNames = [];

            foreach ($itemIds as $itemId) {
                $item = Classes::find($itemId) ?? Terms::find($itemId);
                if ($item) {
                    $itemNames[] = $item->name;
                }
            }

            $user = Auth::user();
            $orderTotal = $order->order_total;
            $discountTotal = $order->discount_total;

            $data = [
                'user' => $user->name,
                'items' => $itemNames,
                'orderTotal' => $orderTotal,
                'discountTotal' => $discountTotal
            ];

            Mail::to($user->email)->send(new OrderConfirmation($data));

            return response()->json([
                'status' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'error' => $result
            ]);
        }
    }
}
