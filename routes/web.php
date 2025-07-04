<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Blog/Listing', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });






Route::get('/', [PostController::class, 'home'])->name('view-blogs');

Route::get('/createblog', [PostController::class, 'index'])->middleware(['auth'])->name('create-blog');

Route::get('/miniblog/home', [PostController::class, 'home'])->name('home');

Route::Post('/publish', [PostController::class, 'create'])->name('publish-blogs');


Route::Delete('/delete/{id}', [PostController::class, 'destroy'])->name('delete-blog');
Route::Put('/edit/{id}', [PostController::class, 'edit'])->name('edit-blog');



Route::get('/dashboard', function () {
    return Inertia::render('Blog/Listing');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
