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
class BlogPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $user = auth()->user();
        $blogs = Post::where('user_id', $user->id)->with('images')->get();
        return Inertia::render('Blog/CreateBlog', ['blogs' => $blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $path = "";
        $user = auth()->user();

        // dd("hi its create function testing");
        $request->validate([
            'title' => 'required|max:100|min:3',
            'content' => 'required|max:1000|min:20'
        ]);


        if ($request->hasFile('img')) {
            $path = $request->file('img')->store('uploads', 'public');

        }

        $blogData = [
            'user_id' => $user->id,
            'title' => $request->title,
            'content' => $request->content,

        ];

        $imageData = [

            'path' => $path,
        ];
        try {
            if (!$request->editingId) {
                $post = $user->posts()->create($blogData);
                $post->images()->create($imageData);
                return back()->with('success', 'Blog posted successfully');
            } else {

                $post = Post::findOrFail($request->editingId);
                $post->update($blogData);
                if ($path) {
                    $post->images()->update($imageData);
                }


            }
        } catch (Exception $e) {
            return back()->with('error', 'Failed to save the post. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
    {
        $blog = Post::findOrFail($id);
        if ($blog->user->id !== auth()->user()->id) {
            abort(403, 'Unauthorized');
        }
        $blog->delete();
        return redirect()->back()->with('Success', 'Deleted succesfully');
    }
}
