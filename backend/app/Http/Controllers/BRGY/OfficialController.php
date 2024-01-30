<?php

namespace App\Http\Controllers\BRGY;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BRGY\Official;

class OfficialController extends Controller
{
    public function index() {
        $official = Official::orderBy('created_at', 'desc')->get();

        return response()->json($official);
    }

    public function show($id) {
        $official = Official::findOrFail($id);
        
        return response()->json($official);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => 'string',
            'gender' => 'string',
            'contact_number' => 'string',
            'email' => 'string',
            'dob' => 'string',
            'address' => 'string',
            'position' => 'string',
            'startOfTerm' => 'string',
            'endOfTerm' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $official = Official::create($formFields);

        return response()->json($official, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => 'string',
            'gender' => 'string',
            'contact_number' => 'string',
            'email' => 'string',
            'dob' => 'string',
            'address' => 'string',
            'position' => 'string',
            'startOfTerm' => 'string',
            'endOfTerm' => 'string',
        ]);

        $official = Official::find($user_id);

        if(!$official) {
            return response()->json(['error', 'No Official Found'], 404);
        }

        $official->update($formFields);

        return response()->json($official, 201);
    }

    public function destroy($user_id) {
        try {
            $official = Official::findOrFail($user_id);
            $official->delete();
        } catch (\Exception $e) {
            return response()->json(['error', 'Official Not Found'], 404);
        }
    }
}
