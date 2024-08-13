<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Terms;
use App\Models\Orders;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function index()
    {
        $classes = Classes::all();
        $students = Student::all();
        $terms = Terms::all();
        return Inertia::render('Admin/Admin', [
            'classes' => $classes,
            'students' => $students,
            'terms' => $terms
        ]);
    }
}
