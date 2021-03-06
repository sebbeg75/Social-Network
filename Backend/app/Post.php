<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'name', 'image', 'user_id',
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function post()
    {
        return $this->hasOne('App\Post', 'likeable');
    }
    public function likes() {
        return $this->hasMany('App\Like');
    }
}
