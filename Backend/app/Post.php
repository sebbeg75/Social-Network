<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'name', 'image', 'user_id'
    ];
    public function post(){
        return $this->belongsTo('App\User');
    }
}
