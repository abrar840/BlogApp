<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //



    public function home()
    {
        $blogs = Post::with('images')->inRandomOrder()->get();


        return Inertia::render('Blog/Listing', ['blogs' => $blogs]);
    }
}
