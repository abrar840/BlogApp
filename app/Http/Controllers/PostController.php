<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Image;

class PostController extends Controller
{
    //
    public function create(Request $request)
    {
        $user = auth()->user();

        // dd("hi its create function testing");
        $request->validate([
            'title' => 'required|max:100|min:3',
            'content' => 'required|max:1000|min:20'
        ]);
        $path = $request->file('img')->store('uploads', 'public');

        try {
            $post = new Post();
            $post->user_id = $user->id;
            $post->title = $request->title;
            $post->content = $request->content;
            $post->save();

            $image = new Image();
            $image->post_id = $post->id;
            $image->path = $path;
            $image->save();

            return back()->with('success', 'Blog posted successfully');
        } catch (Exception $e) {
            return back()->with('error', 'Failed to save the post. Please try again.');
        }
    }










    public function deletePost()
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

    public function home()
    {

        return Inertia::render('Blog/Listing');
    }
}
