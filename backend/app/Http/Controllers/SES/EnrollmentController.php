<?php

namespace App\Http\Controllers\SES;

use Illuminate\Http\Request;
use App\Models\SES\Enrollment;
use App\Http\Controllers\Controller;

class EnrollmentController extends Controller
{
    public function index() {
        $enrollment = Enrollment::orderBy('created_at', 'desc')->get();

        return response()->json($enrollment);
    }

    public function show($id) {
        $enrollment = Enrollment::findOrFail($id);

        return response()->json($enrollment);
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

        $enrollment = Enrollment::create($formFields);

        return response()->json($enrollment, 201);
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
            'status' => 'string',
        ]);

        $enrollment = Enrollment::find($user_id);

        if(!$enrollment) {
            return response()->json(['error' => 'No enrollment found'], 404);
        }

        $enrollment->update($formFields);

        return response()->json([
            'message' => 'Enrollment updated successfully.', 'data' => $enrollment]);
    }

    public function destroy($user_id) {
        try {
            $enrollment = Enrollment::findOrFail($user_id);
            $enrollment->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Enrollment was not found'], 404);
        }
    }
}
