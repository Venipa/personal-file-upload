<?php

namespace App\Http\Controllers;

use App\Links;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ShortenerController extends Controller
{
    public function shorten(Request $r) {
        $v = Validator::make($r->all(), [
            'key' => 'required|exists:users,apikey',
            'url' => 'required|url',
            'password' => 'sometimes|required|nullable|min:4|max:255',
            'wait' => 'sometimes|required|nullable|numeric|max:' . 60*5
        ]);
        if($v->fails()) return $v->errors();
        $user = User::where('apikey', $r->input('key'))->first();
        $token = str_random(8);
        $deletiontoken = str_random(20);
        while(Links::where('token', $token)->count() > 0) {
            $token = str_random(8);
        }
        while(Links::where('deltoken', $deletiontoken)->count() > 0) {
            $deletiontoken = str_random(20);
        }
        $link = Links::create([
            'url' => $r->input('url'),
            'token' => $token,
            'deltoken' => $deletiontoken,
            'password' => $r->input('password'),
            'wait' => $r->input('wait', null),
            'userId' => $user->id
        ]);
        return response()->json([
            'url' => route('api:link:get', [
                'token' => $link->token,
                'slug' => $link->getSlug()
            ]),
            'durl' => route('api:link:delete', [
                'token' => $link->deltoken
            ])
        ]);
    }
    public function createLink() {
        return view('linkcreate');
    }
    public function postLink(Request $r) {
        $v = $this->getValidationFactory()->make($r->all(), [
            'link' => 'required|url',
            'password' => 'sometimes|nullable|min:4|max:255',
            'wait' => 'sometimes|nullable|numeric|max:' . 60*5
        ]);
        if($v->fails()) dd($v->errors());
        $user = Auth::user();
        $token = str_random(8);
        $deletiontoken = str_random(20);
        while(Links::where('token', $token)->count() > 0) {
            $token = str_random(8);
        }
        while(Links::where('deltoken', $deletiontoken)->count() > 0) {
            $deletiontoken = str_random(20);
        }
        $pw = $r->input('password', null);
        $link = Links::create([
            'url' => $r->input('link'),
            'token' => $token,
            'deltoken' => $deletiontoken,
            'password' => $pw != null ? Hash::make($pw) : null,
            'wait' => $r->input('wait', null),
            'userId' => $user->id
        ]);
        return redirect()->route('links');
    }
    public function links() {
        $user = Auth::user()->with('links')->first();
        return view('links')->with(['user' => $user]);
    }
    public function delLink(Request $r, $token) {
        $v = Validator::make($r->merge(['token' => $token])->all(), [
            'token' => 'required|exists:links,deltoken'
        ]);
        if($v->fails()) return $v->errors();
        $link = Links::where('deltoken', $token)->delete();
        return response()->json([
            'success' => $link,
            'token' => $token
        ]);
    }
    public function getLink(Request $r, $token, $slug = null, $ignorePass = false) {
        $v = Validator::make($r->merge(['token' => $token])->all(), [
            'token' => 'required|exists:links,token'
        ]);
        if($v->fails()) return $v->errors();
        $link = Links::where('token', $token)->first();
        if(($link->password != null || $link->wait != null) && !$ignorePass) {
            return view('linkblock', ['link' => $link]);
        } else {
            $link->views++;
            $link->save();
            return redirect()->to($link->url, 302, [
                'PF-UPLOAD-REDIRECT' => $r->getHost()
            ]);
        }
    }
    public function checkPass(Request $r, $token, $slug = null) {
        $v = $this->getValidationFactory()->make($r->merge(['token' => $token])->all(), [
            'password' => 'required',
            'token' => 'required|exists:links,token'
        ]);
        if($v->fails()) return redirect()->back()->withErrors($v->errors());
        $link = Links::where('token', $token)->first();
        if(!Hash::check($r->input('password'), $link->password)) {
            $v->errors()->add('password', 'Password does not match!');
            return redirect()->back()->withErrors($v->errors());
        }
        return $this->getLink($r, $token, $slug, true);
    }
}
