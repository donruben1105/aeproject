<?php

namespace App\Http\Controllers\ECOMMERCE;

use Illuminate\Http\Request;
use App\Models\ECOMMERCE\ECheckout;
use App\Http\Controllers\Controller;

class ECheckoutController extends Controller
{
    public function index() {
        $checkout = ECheckout::orderBy('created_at', 'desc')->get();

        return response()->json($checkout);
    }

    public function show($id) {
        $checkout = ECheckout::findOrFail($id);

        return response()->json($checkout);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'listing_id' => 'exists:listings,id',
            'name' => 'string',
            'phone_number' => 'string',
            'address' => 'string',
            'city' => 'string',
            'zip_code' => 'string',
            'amount' => 'string',
            'status' => 'string',
            'type' => 'string',
            'card_holder_name' => 'string',
            'credit_card_number' => 'string',
            'expiration_date' => 'string',
            'cvv' => 'string',
            'contact_number' => 'string',
            'account_name' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $checkout = ECheckout::create($formFields);

        return response()->json($checkout, 201);
    }
}
