<?php

namespace App\Http\Controllers\BRGY;

use Illuminate\Http\Request;
use App\Models\BRGY\Resident;
use App\Http\Controllers\Controller;

class ResidentController extends Controller
{
    public function index() {
        $resident = Resident::orderBy('created_at', 'desc')->get();

        return response()->json($resident);
    }

    public function show($id) {
        $resident = Resident::findOrFail($id);

        return response()->json($resident);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => 'string',
            'unit' => 'string',
            'block_and_lot' => 'string',
            'barangay' => 'string',
            'city' => 'string',
            'province' => 'string',
            'zip_code' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $resident = Resident::create($formFields);

        return response()->json($resident, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => 'string',
            'unit' => 'string',
            'block_and_lot' => 'string',
            'barangay' => 'string',
            'city' => 'string',
            'province' => 'string',
            'zip_code' => 'string',
        ]);

        $resident = Resident::find($user_id);

        if(!$resident) {
            return response()->json(['error' => 'No resident found'], 404);
        }

        $resident->update($formFields);

        return response()->json($resident, 201);
    }

    public function destroy($user_id) {
        try {
            $resident = Resident::findOrFail($user_id);
            $resident->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting resident'], 404);
        }
    }
}
