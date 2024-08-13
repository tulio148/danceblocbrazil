<?php

namespace App\Http\Controllers;

use App\Services\StudentService;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    public function store()
    {
        $user = auth()->user();
        if (!$user->student) {
            app(StudentService::class)->store($user);
            return redirect()->route('dashboard');
        }
    }
}
