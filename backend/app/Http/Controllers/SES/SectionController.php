<?php

namespace App\Http\Controllers\SES;

use App\Models\SES\Section;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SectionController extends Controller
{
    public function index() {
        $section = Section::orderBy('created_at', 'desc')->get();

        return response()->json($section);
    }

    public function show($id) {
        $section = Section::findOrFail($id);

        return response()->json($section);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $section = Section::create($formFields);

        return response()->json($section, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $section = Section::find($user_id);

        if(!$section) {
            return response()->json(['error' => 'No section found'], 404);
        }

        $section->update($formFields);

        return response()->json(['success' => 'section updated successfully', 'data' => $section]);
    }

    public function destroy($user_id) {
        try {
            $section = Section::findOrFail($user_id);
            $section->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Section not found'], 404);
        }
    }
}
