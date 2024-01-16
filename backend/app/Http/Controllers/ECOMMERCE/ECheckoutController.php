<?php

namespace App\Http\Controllers\ECOMMERCE;

use Illuminate\Http\Request;
use App\Models\ECOMMERCE\ECheckout;
use App\Http\Controllers\Controller;

class ECheckoutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, ECheckout $checkout)
    {
        $checkout->name = $request->name;
        $checkout->phone_number = $request->phone_number;
        $checkout->address = $request->address;
        $checkout->city = $request->city;
        $checkout->zip_code = $request->zip_code;
        $checkout->amount = $request->amount;
        $checkout->status = $request->status;
        $checkout->type = $request->type;
        $checkout->card_holder_name = $request->card_holder_name;
        $checkout->credit_card_number = $request->credit_card_number;
        $checkout->expiration_date = $request->expiration_date;
        $checkout->cvv = $request->cvv;
        $checkout->contact_number = $request->contact_number;
        $checkout->account_name = $request->account_name;

        $checkout->save();

        return response()->json($checkout);
    }
}
