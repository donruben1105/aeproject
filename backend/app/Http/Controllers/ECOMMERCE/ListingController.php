<?php

namespace App\Http\Controllers\ECOMMERCE;

use Illuminate\Http\Request;
use App\Models\ECOMMERCE\Listing;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ListingController extends Controller
{
    public function index()
    {
        $listing = Listing::orderBy('created_at', 'desc')->get();

        return response()->json($listing);
    }

    public function show($id)
    {
        $listing = Listing::findOrFail($id);

        return response()->json($listing);
    }

    public function store(Request $request)
    {
        $formFields = $request->validate([
            'image' => 'image|mimes:jpeg,jpg,png',
            'name' => 'string',
            'price' => 'string',
            'status' => 'string',
        ]);

        $image = $formFields['image'] ?? null;

        if ($image) {
            $formFields = $this->processImage($formFields, $image);
        }

        $formFields['user_id'] = auth()->id();

        $listing = Listing::create($formFields);

        return response()->json($listing, 201);
    }

    public function update(Request $request, $user_id)
    {
        $listing = Listing::findOrFail($user_id);

        $formFields = $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg',
            'name' => 'string',
            'price' => 'string',
            'status' => 'string',
        ]);

        $image = $formFields['image'];

        if ($image) {
            $formFields = $this->processImage($formFields, $image);

            if ($listing->image) {
                Storage::deleteDirectory('/public/' . dirname($listing->image));
            }
        }

        $listing->update($formFields);

        return response()->json($listing, 200);
    }

    public function destroy($user_id)
    {
        try {
            $listing = Listing::findOrFail($user_id);
            $listing->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Listing was not found'], 404);
        }
    }

    private function processImage($formFields, $image)
    {
        try {
            $relativePath = $this->saveImage($image);
            $formFields['image'] = URL::to(Storage::url($relativePath));
            $formFields['image_mime'] = $image->getClientMimeType();
            $formFields['image_size'] = $image->getSize();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error processing image'], 500);
        }

        return $formFields;
    }

    private function saveImage($image)
    {
        $path = $image->store('public/images');

        return str_replace('public/', '', $path);
    }
}
