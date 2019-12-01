<?php

namespace App\Http\Controllers\WebAPI;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $r)
    {
        $v = Validator::make($r->all(), [
            'email' => 'required|string|email|max:255|exists:users',
            'password' => 'required|string'
        ]);
        if ($v->fails()) {
            return response()->json(['errors' => $v->errors()], 403);
        }
        $user = User::where('email', $r->input('email'))->first();
        if ($user->hasRole('banned')) {
            $v->errors()->add('user', 'Your Account has been banned');
            return response()->json(['errors' => $v->errors()], 403);
        }
        if (!Hash::check($r->input('password'), $user->password)) {
            $v->errors()->add('password', 'Email or Password does not match');
            return response()->json(['errors' => $v->errors()], 403);
        }
        if (Auth::attempt([
            'email' => $user->email,
            'password' => $r->input('password')
        ], $r->input('remember', false))) {
            return response()->json(['message' => 'Successfully logged in', 'to' => route('files')]);
        } else {
            $v->errors()->add('auth', 'Something went wrong');
            return response()->json(['errors' => $v->errors()], 403);
        }
    }
}
