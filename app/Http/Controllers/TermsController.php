<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Terms;
use Illuminate\Http\Request;
use App\Services\TermService;
use App\Services\TermsService;
use App\Http\Controllers\Controller;

class TermsController extends Controller
{
    // public function index()
    // {
    //     $terms = [];
    //     foreach (Terms::all() as $term) {
    //         $terms[] = $term;
    //     }

    //     return Inertia::render('Terms/Terms', [
    //         'terms' => $terms
    //     ]);
    // }

    // public function show(Terms $term)
    // {
    //     return Inertia::render('Terms/Show', [
    //         'term' => $term
    //     ]);
    // }

    public function store(Request $request)
    {
        app(TermsService::class)->store($request);
        return back()->with('success', 'Term created successfully')->with('status', 200);
    }

    public function update(Request $request)
    {
        app(TermsService::class)->update($request);
        return back()->with('success', 'Term updated successfully')->with('status', 200);
    }

    public function destroy(Terms $term)
    {
        app(TermsService::class)->destroy($term);
        return redirect()->route('admin')->with('message', 'Term deleted successfully')->with('status', 200);
    }
}
