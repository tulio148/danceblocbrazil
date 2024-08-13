<?php

namespace App\Providers;

use App\Services\CardsService;
use Illuminate\Support\ServiceProvider;

class CardsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(CardsService::class, function ($app) {
            return new CardsService();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
