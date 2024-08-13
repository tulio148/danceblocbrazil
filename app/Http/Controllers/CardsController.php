<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use Illuminate\Http\Request;
use App\Services\CardsService;
use App\Http\Controllers\Controller;

class CardsController extends Controller
{
    public function destroy(Cards $card)
    {
        app(CardsService::class)->delete($card->id);
    }
}
