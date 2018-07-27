<?php

namespace App\Http\Controllers;

use App\Uploads;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UploadController extends Controller
{

    public function upload(Request $r) {
        $v = Validator::make($r->all(), [
            'key' => 'required|exists:sqlite.users,apikey',
            'file' => 'required|file|max:' . (100*1024)
        ]);
        if($v->fails()) return $v->errors();
        $user = User::where('apikey', $r->input('key'))->first();
        $file = $r->file('file');
        $ufile = Uploads::where('hash', md5_file($file->getRealPath()))->first();
        if($ufile == null) {
            $sharetoken = str_random(10);
            $deletiontoken = str_random(20);
            while(Uploads::where('share_token', $sharetoken)->count() > 0) {
                $sharetoken = str_random(10);
            }
            while(Uploads::where('deletion_token', $deletiontoken)->count() > 0) {
                $deletiontoken = str_random(20);
            }
            try {
                $result = $file->storeAs('', $sharetoken, 'uploads');
            } finally {
                $ufile = Uploads::create([
                    'share_token' => $sharetoken,
                    'deletion_token' => $deletiontoken,
                    'filename' => $file->getClientOriginalName(),
                    'filemime' => $file->getClientMimeType(),
                    'filetype' => $file->getClientOriginalExtension(),
                    'filesize' => $file->getSize(),
                    'user_id' => $user->id,
                    'hash' => md5_file($file->getRealPath())
                ]);
            }
        }
        return response()->json([
            'url' => route('api:upload:get', [$ufile->share_token, str_slug($ufile->filename, "-")]) . ($file->filetype == "gif" ? ".gif" : ""),
            'deletion_url' => route('api:upload:delete', $ufile->deletion_token),
            'info_url' => route('api:upload:info', [$ufile->share_token, str_slug($ufile->filename, "-")])
        ]);
    }
    public function delupload($deltoken, Request $r) {
        $v = Validator::make([
            'key' => $deltoken
        ], [
            'key' => 'required|exists:uploads,deletion_token',
        ]);
        if($v->fails()) return $v->errors();
        $file = Uploads::where('deletion_token', $deltoken)->first();
        Storage::disk('uploads')->delete($file->share_token);
        $file->delete();
        return response()->json([
            'message' => $file->filename.' has been deleted'
        ]);
    }
    private function bytesToHuman($bytes)
    {
        $units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }

        return round($bytes, 2) . ' ' . $units[$i];
    }
    public function getInfo($token, $slug = null, Request $r) {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->with('user')->first();
        $file->humsize = $this->bytesToHuman($file->filesize);
        return view('info')->with(['file' => $file]);
    }
    public function getfile($token, $slug = null, Request $r) {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->first();
        $fs = Storage::disk('uploads')->getDriver();
        $stream = $fs->readStream($file->share_token);
        return response()->stream(function() use($stream) {
            while(ob_get_level() > 0) ob_end_flush();
            fpassthru($stream);
        }, 200,[
            'Content-Type' => $file->filemime,
        ]);
    }
}
