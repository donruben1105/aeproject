<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SES\SectionController;
use App\Http\Controllers\SES\EnrollmentController;
use App\Http\Controllers\SES\FacultyController;
use App\Http\Controllers\SES\SubjectController;
use App\Http\Controllers\SES\TermController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('SES')->group(function() {
    Route::apiResource('/enrollment', EnrollmentController::class);
    Route::apiResource('/section', SectionController::class);
    Route::apiResource('/term', TermController::class);
    Route::apiResource('/subject', SubjectController::class);
    Route::apiResource('/faculty', FacultyController::class);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
