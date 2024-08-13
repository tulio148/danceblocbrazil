<?php

return [
    App\Providers\AppServiceProvider::class,
    App\Providers\AuthServiceProvider::class,
    App\Providers\SquareServiceProvider::class,
    App\Providers\EventServiceProvider::class,
    App\Providers\StudentServiceProvider::class,
    App\Providers\ClassesServiceProvider::class,
    App\Providers\OrdersServiceProvider::class,
    App\Providers\PaymentServiceProvider::class,
    App\Providers\CardsServiceProvider::class,
    \SocialiteProviders\Manager\ServiceProvider::class
];
