<?php

namespace App\Http\Controllers;

use App\Like;
use App\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LikeController extends Controller
{
public function like($id, Request $request)
    {
        {
            $user_id = Auth::id();
            $post = Post::find($id);
            $likes = $post->likes()->where('user_id',$user_id)->get();
            if($likes->isNotEmpty()){
                return response([
                    'message' => 'No more likes available'
                ],400);
            }
            $post->likes()->create(['user_id'=>$user_id]);
            return response([
                'message' => 'Thank you '
            ],201);
        }
    }
}
