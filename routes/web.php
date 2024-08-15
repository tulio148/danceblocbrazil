<?php


use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\TermsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;





Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');;

Route::get('/about', function () {
    return Inertia::render('About');
})->name('mission');

Route::get('/samba-carnival-dance-events', function () {
    return Inertia::render('Events/Events');
})->name('events');

Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/carnival-themed-costume-hire', function () {
    return Inertia::render('Costumes/Costumes');
})->name('costumes');

Route::get('/privacy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy');




Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'contact'])->name('contact.contact');
Route::post('/event-enquire', [ContactController::class, 'event'])->name('contact.event');
Route::post('/costume-enquire', [ContactController::class, 'costume'])->name('contact.costume');


Route::get('/samba-dance-classes', [ClassesController::class, 'index'])->name('classes');

Route::get('/classes/create', [ClassesController::class, 'create'])->name('classes.create');
Route::get('/samba-dance-classes/{class}', [ClassesController::class, 'show'])->name('classes.show');
Route::delete('/classes/{class}', [ClassesController::class, 'destroy'])->name('classes.destroy');
Route::get('/classes/{class}/enroll', [ClassesController::class, 'enroll'])->name('classes.enroll')->middleware('auth');

Route::post('/class/store', [ClassesController::class, 'store'])->name('class.store');
Route::post('/class/update', [ClassesController::class, 'update'])->name('class.update');

Route::post('/term/store', [TermsController::class, 'store'])->name('terms.store');
Route::post('/term/update', [TermsController::class, 'update'])->name('terms.update');
Route::delete('/term/{term}', [TermsController::class, 'destroy'])->name('terms.destroy');

Route::middleware('auth')->group(function () {
    Route::post('/order/store', [OrdersController::class, 'store'])->name('order.store');
    Route::post('/order/delete_class', [OrdersController::class, 'delete_class'])->name('order.delete_class');
});

Route::post('/payment', [PaymentController::class, 'store'])->name('payment');

Route::delete('/cards/{card}', [CardsController::class, 'destroy']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'verified', 'admin'])->name('admin');

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile-reminder', [ProfileController::class, 'reminder'])->name('profile.reminder');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
