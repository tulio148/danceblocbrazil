<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use App\Mail\CostumeFormMail;
use App\Mail\InquiryFormMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function contact(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'content' => 'required|string',
        ]);

        Mail::to('info@danceblocbrazil.com')->send(new ContactFormMail($data));
    }
    public function event(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|date',
            'time' => 'required|string',
            'eventType' => 'required|string',
            'guests' => 'required|integer',
            'location' => 'required|string',
            'otherInfo' => 'nullable|string',
            'questions' => 'nullable|string',
        ]);

        Mail::to('info@danceblocbrazil.com')->send(new InquiryFormMail($data));
    }
    public function costume(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|date',
            'otherInfo' => 'nullable|string',
            'questions' => 'nullable|string',
            'costume_name' => 'required|string',
        ]);

        Mail::to('info@danceblocbrazil.com')->send(new CostumeFormMail($data));
    }
}
