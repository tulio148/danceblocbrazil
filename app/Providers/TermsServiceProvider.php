<?php

namespace App\Providers;

use App\Services\TermsService;
use Illuminate\Support\ServiceProvider;

class TermsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(TermsService::class, function ($app) {
            return new TermsService();
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
