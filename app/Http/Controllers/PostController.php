<?php

namespace App\Http\Controllers;

use Exception;
use GrahamCampbell\ResultType\Error;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use Illuminate\Validation\UnauthorizedException;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Image;

class PostController extends Controller
{
    //
    public function create(Request $request)
    {
        
    }


   

    public function edit($id)
    {

    }

    public function search()
    {
    }

    public function index()
    {
        $user = auth()->user();
        $blogs = Post::where('user_id', $user->id)->with('images')->get();
        return Inertia::render('Blog/CreateBlog', ['blogs' => $blogs]);
    }


}
