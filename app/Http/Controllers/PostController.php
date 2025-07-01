<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use app\Models\Post;
class PostController extends Controller
{
    //
    public function createPost(Request $request){}

    public function deletePost(){}

    public function edit($id){}

    public function search(){}

    public function index(){
        
        return Inertia::render('Blog/CreateBlog');
    }

     public function home(){
        
        return Inertia::render('Blog/Listing');
    }
}
