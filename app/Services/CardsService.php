<?php

namespace App\Services;

use App\Models\Cards;
use Square\Models\Card;
use Square\SquareClient;
use Square\Models\CreateCardRequest;

class CardsService
{
    public function create($payment_id, $cardholder)
    {
        $user = auth()->user();
        $student = $user->student;
        $client = app(SquareClient::class);
        $idempotency_key = uniqid();

        $card = new Card();
        $card->setCustomerId($student->id);
        $card->setCardholderName($cardholder);

        $body = new CreateCardRequest(
            $idempotency_key,
            $payment_id,
            $card
        );

        $api_response = $client->getCardsApi()->createCard($body);

        if ($api_response->isSuccess()) {
            $card_id = $api_response->getResult()->getCard()->getId();
            $brand = $api_response->getResult()->getCard()->getCardBrand();
            $last_4 = $api_response->getResult()->getCard()->getLast4();
            Cards::create(
                [
                    'id' => $card_id,
                    'brand' => $brand,
                    'last_4' => $last_4,
                    'student_id' => $student->id,
                    'cardholder_name' => $cardholder,
                ]
            );
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }

    public function delete($card_id)
    {
        $client = app(SquareClient::class);
        $api_response = $client->getCardsApi()->disableCard($card_id);

        if ($api_response->isSuccess()) {
            $card = Cards::find($card_id);
            $card->delete();
            return;
        } else {
            $errors = $api_response->getErrors();
            dd($errors);
        }
    }
}
