<?php

namespace App\Http\Controllers;

use App\Uploads;
use App\User;
use GrahamCampbell\GitLab\Facades\GitLab;
use GrahamCampbell\GitLab\GitLabManager;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Pbmedia\LaravelFFMpeg\FFMpegFacade;
use FFMpeg as ffm;
use FFMpeg\FFMpeg;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
    public function login(Request $r)
    {
        if (!$r->isMethod('POST')) return view('auth.login');
        $v = Validator::make($r->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|min:5|max:30'
        ]);
        if ($v->fails()) return redirect()->back()->withErrors($v->errors());
        $user = User::where('email', $r->input('email'))->first();

        if (auth()->attempt([
            'email' => $r->input('email'),
            'password' => $r->input('password')
        ], true)) {
            return redirect()->route('files');
        } else {
            $v->errors()->add('password', 'Email or Password does not seem to be correct');
            return redirect()->back()->withErrors($v->errors());
        }
    }
    public function files()
    {
        $user = auth()->user();
        $files = $user->files()->latest()->paginate(25);
        return view('files')->with(['user' => $user, 'files' => $files]);
    }
}
