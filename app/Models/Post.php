<?php

namespace App\Models;
use App\Models\Images;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //








    public function images(){
        $this->hasMany(Images::class,'post_id');
    }

    

}
