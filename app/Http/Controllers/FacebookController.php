<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class FacebookController extends Controller
{

    public function redirectToFacebook()

    {
        return Socialite::driver('facebook')->redirect();
    }

    public function handleFacebookCallback()
    {
        $fbUser = Socialite::driver('facebook')->user();

        $user = User::firstOrCreate(
            ['email' => $fbUser->getEmail()],
            [
                'name' => $fbUser->getName(),
                'email' => $fbUser->getEmail(),
                'signed_in_with' => 'facebook'
            ]
        );

        $profilePictureUrl = $fbUser->avatar;
        $imageContents = file_get_contents($profilePictureUrl);
        $imageName = $user->id . '.jpg';
        Storage::disk('public')->put($imageName, $imageContents);

        Auth::login($user);

        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
