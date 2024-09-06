<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Integration\FacebookController;
use App\Http\Controllers\Leads\LeadController;
use App\Http\Controllers\Settings\ItemController;

Route::get('/leads', [LeadController::class, 'index']);
Route::post('/leads', [LeadController::class, 'store']);

Route::post('/leads/delete', [LeadController::class, 'deleteLeads']);
Route::post('/leads/export', [LeadController::class, 'exportLeads']);


// API routes
Route::get('/items', [ItemController::class, 'index']);

Route::post('/api/items', [ItemController::class, 'store']);
Route::put('/api/items/{id}', [ItemController::class, 'update']);

// Delete an item by ID
Route::delete('/items/{id}', [ItemController::class, 'destroy']);

Route::get('{any?}', function() {
    return view('application');
})->where('any', '.*');

/*---------------------remaber data not featching proper    ------------------------*/

/*---------------------------------------------*/
Route::middleware('api')->group(function () {
    Route::post('/leads', [LeadController::class, 'store']);
});

Route::post('/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/send-password', [AuthController::class, 'sendPassword']);
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
// Auth routes
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [AuthController::class, 'dashboard'])->name('dashboard');
});



