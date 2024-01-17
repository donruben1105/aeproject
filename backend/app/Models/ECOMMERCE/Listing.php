<?php

namespace App\Models\ECOMMERCE;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Listing extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function checkouts() {
        return $this->hasOne(ECheckout::class, 'listing_id');
    }
}
