<?php

namespace App\Services;

use App\Models\Cards;
use App\Models\Orders;
use Square\Models\Card;
use App\Models\Payments;
use Square\Models\Money;
use Square\SquareClient;
use Illuminate\Http\Request;
use Square\Models\CreatePaymentRequest;

class PaymentService
{
    public function pay(Request $request)
    {
        $token = $request->input('token');
        $order_id = $request->input('id');
        $amount = $request->input('amount');
        $cardholder = $request->input('cardholder');
        $storecard = $request->input('storecard');

        $user = auth()->user();
        $student = $user->student;
        $client = app(SquareClient::class);

        $amount_money = new Money();
        $amount_money->setAmount($amount * 100);
        $amount_money->setCurrency('AUD');
        $idempotency_key = uniqid();

        $body = new CreatePaymentRequest($token, $idempotency_key);
        $body->setAmountMoney($amount_money);
        $body->setAutocomplete(true);
        $body->setCustomerId($student->id);
        $body->setOrderId($order_id);
        $body->setLocationId(env('SQUARE_LOCATION_ID'));
        $body->setAcceptPartialAuthorization(false);

        $api_response = $client->getPaymentsApi()->createPayment($body);

        if ($api_response->isSuccess()) {

            $payment_id = $api_response->getResult()->getPayment()->getId();

            Orders::where('id', $order_id)->update(['state' => 'COMPLETED', 'payment_id' => $payment_id]);
            Payments::create(
                [
                    'id' => $payment_id,
                    'order_id' => $order_id,
                    'student_id' => $student->id,
                    'total_money' => $amount
                ]
            );

            if ($storecard == true) {
                app(CardsService::class)->create($payment_id, $cardholder);
                return "success";
            }

            return "success";
        } else {
            $errors = $api_response->getErrors()[0]->getDetail();
            return $errors;
        }
    }
}
