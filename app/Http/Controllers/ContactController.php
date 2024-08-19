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

        try {
            Mail::to('info@danceblocbrazil.com')->send(new ContactFormMail($data));
            return Inertia::render('Contact', ['success' => true]);
        } catch (\Exception $e) {
            return Inertia::render('Contact', ['error' => 'Failed to send email']);
        }
    }
    public function event(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'date' => 'nullable|date',
            'time' => 'nullable|string',
            'eventType' => 'nullable|string',
            'guests' => 'nullable|integer',
            'location' => 'nullable|string',
            'otherInfo' => 'nullable|string',
            'questions' => 'nullable|string',
        ]);


        try {
            Mail::to('info@danceblocbrazil.com')->send(new InquiryFormMail($data));
            return Inertia::render('Events/Events', ['success' => true]);
        } catch (\Exception $e) {
            return Inertia::render('Events/Events', ['error' => 'Failed to send email']);
        }
    }
    public function costume(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'date' => 'nullable|date',
            'otherInfo' => 'nullable|string',
            'questions' => 'nullable|string',
            'costume_name' => 'required|string',
        ]);

        try {
            Mail::to('info@danceblocbrazil.com')->send(new CostumeFormMail($data));
            return Inertia::render('Costumes/Costumes', ['success' => true]);
        } catch (\Exception $e) {
            return Inertia::render('Costumes/Costumes', ['error' => 'Failed to send email']);
        }
    }
}
