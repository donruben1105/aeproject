<?php

namespace App\Http\Controllers\SES;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SES\Subject;

class SubjectController extends Controller
{
    public function index() {
        $subject = Subject::orderBy('created_at', 'desc')->get();

        return response()->json($subject);
    }

    public function show($id) {
        $subject = Subject::findOrFail($id);

        return response()->json($subject);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $subject = Subject::create($formFields);

        return response()->json($subject, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'title' => 'string',
        ]);

        $subject = Subject::find($user_id);

        if (!$subject) {
            return response()->json(['error' => 'No subject found'], 404);
        }

        $subject->update($formFields);

        return response()->json(['success' => 'Subject updated successfully', 'data' => $subject]);
    }

    public function destroy($user_id) {
        try {
            $subject = Subject::findOrFail($user_id);
            $subject->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Subject not found'], 404);
        }
    }
}
