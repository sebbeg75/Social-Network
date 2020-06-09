<?php

namespace App\Http\Controllers;

use App\like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function create($post_id)
    {
        Like::create(['post_id'=>$post_id, 'user_id' => Auth::id()]);
    }
}
