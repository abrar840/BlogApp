<?php

namespace App\Models;
use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //

    use HasFactory;


    protected $fillable = [

        'title',
        'content',
    ];






    public function images()
    {
        return $this->hasMany(Image::class, 'post_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
