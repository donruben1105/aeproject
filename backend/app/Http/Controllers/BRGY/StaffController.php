<?php

namespace App\Http\Controllers\BRGY;

use App\Models\BRGY\Staff;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StaffController extends Controller
{
    public function index() {
        $staff = Staff::orderBy('created_at', 'desc')->get();

        return response()->json($staff);
    }
    
    public function show($id) {
        $staff = Staff::findOrFail($id);

        return response()->json($staff);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => 'string',
            'email' => 'string',
            'gender' => 'string',
            'position' => 'string',
            'contact_number' => 'string',
            'address' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $staff = Staff::create($formFields);

        return response()->json($staff, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => 'string',
            'email' => 'string',
            'gender' => 'string',
            'position' => 'string',
            'contact_number' => 'string',
            'address' => 'string',
        ]);

        $staff = Staff::find($user_id);

        if(!$staff) {
            return response()->json(['error' => 'No staff found'], 404);
        }

        $staff->update($formFields);

        return response()->json($staff, 201);
    }

    public function destroy($id) {
        try {
            $staff = Staff::findOrFail($id);
            $staff->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'No staff found'], 404);
        }
    }
}
