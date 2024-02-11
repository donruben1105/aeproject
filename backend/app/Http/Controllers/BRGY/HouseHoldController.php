<?php

namespace App\Http\Controllers\BRGY;

use Illuminate\Http\Request;
use App\Models\BRGY\HouseHold;
use App\Http\Controllers\Controller;

class HouseHoldController extends Controller
{
    public function index() {
        $houseHold = HouseHold::orderBy('created_at', 'DESC')->get();

        return response()->json($houseHold);
    }

    public function show($id) {
        $houseHold = HouseHold::findOrFail($id);

        return response()->json($houseHold);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => 'string',
            'gender' => 'string',
            'birthdate' => 'string',
            'birth_place' => 'string',
            'household_number' => 'string',
            'blood_type' => 'string',
            'civil_status' => 'string',
            'length_of_stay' => 'string',
            'occupation' => 'string',
            'monthly_income' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $houseHold = HouseHold::create($formFields);

        return response()->json($houseHold, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => 'string',
            'gender' => 'string',
            'birthdate' => 'string',
            'birth_place' => 'string',
            'household_number' => 'string',
            'blood_type' => 'string',
            'civil_status' => 'string',
            'length_of_stay' => 'string',
            'occupation' => 'string',
            'monthly_income' => 'string',
        ]);

        $houseHold = HouseHold::find($user_id);

        if(!$houseHold) {
            return response()->json(['error' => 'No Household Found'], 404);
        }

        $houseHold->update($formFields);

        return response()->json($houseHold, 201);
    }

    public function destroy($user_id) {
        try {
            $houseHold = HouseHold::findOrFail($user_id);
            $houseHold->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Household not found'], 404);
        }
    }
}
