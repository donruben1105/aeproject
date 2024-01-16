<?php

namespace App\Http\Controllers\ECOMMERCE;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ECOMMERCE\ContactUs;

class ContactUsController extends Controller
{
    public function index() {
        $contact = ContactUs::orderBy('created_at', 'desc')->get();

        return response()->json($contact);
    }

    public function show($id) {
        $contact = ContactUs::findOrFail($id);

        return response()->json($contact);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => 'string',
            'contact_number' => 'string',
            'description' => 'string',
        ]);

        $formFields['user_id'] = auth()->id();

        $contact = ContactUs::create($formFields);

        return response()->json($contact, 201);
    }
}
