<?php

namespace App\Http\Controllers\SES;

use App\Models\SES\Term;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TermController extends Controller
{
    public function index() {
        $term = Term::orderBy('created_at', 'desc')->get();

        return response()->json($term);
    }

    public function show($id) {
        $term = Term::findOrFail($id);

        return response()->json($term);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $term = Term::create($formFields);

        return response()->json($term, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $term = Term::find($user_id);

        if(!$term) {
            return response()->json(['error' => 'No term found.'], 404);
        }

        $term->update($formFields);

        return response()->json(['success' => 'Term updated successfully', 'data' => $term]);
    }

    public function destroy($user_id) {
        try {
            $term = Term::findOrFail($user_id);
            $term->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Term not found.'], 404);
        }
    }
}
