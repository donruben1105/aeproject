<?php

namespace App\Models\ECOMMERCE;

use App\Models\User;
use App\Models\ECOMMERCE\Listing;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ECheckout extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function checkouts() {
        return $this->belongsTo(Listing::class, 'listing_id');
    }
}
