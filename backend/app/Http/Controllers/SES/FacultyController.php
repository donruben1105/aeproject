<?php

namespace App\Http\Controllers\SES;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SES\Faculty;

class FacultyController extends Controller
{
    public function index() {
        $faculty = Faculty::orderBy('created_at', 'desc')->get();

        return response()->json($faculty);
    }

    public function show($id) {
        $faculty = Faculty::findOrFail($id);

        return response()->json($faculty);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'first_name' => 'string',
            'last_name' => 'string',
            'gender' => 'string',
            'contact_number' => 'string',
            'email' => 'string',
            'dob' => 'string',
            'address' => 'string',
            'term' => 'string',
            'section' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $faculty = Faculty::create($formFields);

        return response()->json($faculty, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'first_name' => 'string',
            'last_name' => 'string',
            'gender' => 'string',
            'contact_number' => 'string',
            'email' => 'string',
            'dob' => 'string',
            'address' => 'string',
            'term' => 'string',
            'section' => 'string',
        ]);

        $faculty = Faculty::find($user_id);

        if(!$faculty) {
            return response()->json(['error' => 'No faculty found'], 404);
        }

        $faculty->update($formFields);

        return response()->json(['success' => 'Faculty successfully updated', 'data' => $faculty]);
    }

    public function destroy($user_id) {
        try {
            $faculty = Faculty::findOrFail($user_id);
            $faculty->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Faculty was not found'], 404);
        }
    }
}
