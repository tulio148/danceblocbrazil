<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(): RedirectResponse
    {
        $googleUser = Socialite::driver('google')->user();



        $user = User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                'signed_in_with' => 'google'
            ]
        );

        $profilePictureUrl = $googleUser->avatar;
        $imageContents = file_get_contents($profilePictureUrl);
        $imageName = $user->id . '.jpg';
        Storage::disk('public')->put($imageName, $imageContents);

        Auth::login($user, true);

        return redirect()->intended('/dashboard');
    }
}
