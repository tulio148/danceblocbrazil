<?php

namespace App\Services;

use App\Models\Terms;
use Illuminate\Http\Request;

class TermsService
{
    public function store($request)
    {
        $id = $request->id;
        $name = $request->name;
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $instructor = $request->instructor;
        $description = $request->description;
        $level = $request->level;
        $style = $request->style;
        $location = $request->location;
        $price = $request->price;

        Terms::updateOrCreate(
            ['id' => $id],
            [
                'id' => $id,
                'name' => $name,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'description' => $description,
                'level' => $level,
                'instructor' => $instructor,
                'style' => $style,
                'location' => $location,
                'price' => $price,
            ]
        );
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $name = $request->name;
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $instructor = $request->instructor;
        $description = $request->description;
        $level = $request->level;
        $style = $request->style;
        $location = $request->location;
        $price = $request->price;
        $term = Terms::find($id);

        if ($term == null) {
            return;
        }

        $term->name = $name;
        $term->start_date = $start_date;
        $term->end_date = $end_date;
        $term->level = $level;
        $term->instructor = $instructor;
        $term->description = $description;
        $term->style = $style;
        $term->location = $location;
        $term->price = $price;

        $term->save();
    }

    public function destroy($term)
    {
        $term->delete();
    }
}
