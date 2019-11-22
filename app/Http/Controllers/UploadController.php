<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessVideoThumbnail;
use App\Media;
use App\Uploads;
use App\User;
use App\VideoStream;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Throwable;

class UploadController extends Controller
{

    public function upload(Request $r)
    {
        $v = Validator::make($r->all(), [
            'key' => 'required|exists:users,apikey',
            'file' => 'required|file|max:' . (100 * 1024)
        ]);
        if ($v->fails()) return $v->errors();
        $user = User::where('apikey', $r->input('key'))->first();
        $file = $r->file('file');
        $ufile = $user->files()->where('hash', md5_file($file->getRealPath()))->first();
        if ($ufile == null) {
            $sharetoken = str_random(10);
            $deletiontoken = str_random(20);
            while (Uploads::where('share_token', $sharetoken)->count() > 0) {
                $sharetoken = str_random(10);
            }
            while (Uploads::where('deletion_token', $deletiontoken)->count() > 0) {
                $deletiontoken = str_random(20);
            }
            list($storageDriver, $storageDriverKey) = [config('filesystems.disks.' . config('filesystems.defaultUpload')), config('filesystems.defaultUpload')];
            if ($storageDriver == null) {
                return abort(500, 'Invalid Storage Endpoint');
            }
            $ufile = Uploads::create([
                'share_token' => $sharetoken,
                'deletion_token' => $deletiontoken,
                'filename' => $file->getClientOriginalName(),
                'filemime' => $file->getClientMimeType(),
                'filetype' => $file->getClientOriginalExtension() ?? (new \Mimey\MimeTypes())->getExtension($file->getClientMimeType()),
                'filesize' => $file->getSize(),
                'user_id' => $user->id,
                'hash' => md5_file($file->getRealPath()),
                'driver' => $storageDriverKey
            ]);
            try {
                $originFile = $file;
                try {
                    $file = $file->move(storage_path('app/tmp'), str_random(20) . '_' . $file->getFilename());
                    $file = new UploadedFile($file->getRealPath(), $originFile->getClientOriginalName(), $originFile->getClientMimeType());
                } catch (Throwable $jobEx) {
                    Log::error($jobEx);
                    return abort(500);
                }
                if ($storageDriver['driver'] !== 'local') {
                    $storagePath = $ufile->getFilePath();
                    $result = $file->storePubliclyAs('', $storagePath, [
                        'disk' => $storageDriverKey ?? config('filesystems.defaultUpload'),
                        'mime-type' => $ufile->filemime,
                        'ContentType' => $ufile->filemime,
                        'content-type' => $ufile->filemime,
                        'response-content-type' => $ufile->filemime,
                        'type' => $ufile->filemime,
                        'response-content-disposition' => 'inline; filename=' . $ufile->filename,
                        'ContentDisposition' => 'inline; filename=' . $ufile->filename,
                        'content-disposition' => 'inline; filename=' . $ufile->filename,
                        'disposition' => 'inline; filename=' . $ufile->filename
                    ]);
                } else {
                    $result = $file->storeAs('', $ufile->share_token, $storageDriverKey ?? config('filesystems.defaultUpload'));
                }
                if ($file != null) {
                    if (file_exists($file->getRealPath())) {
                        if (preg_match('/^video/', $ufile->filemime)) {
                            dispatch(new ProcessVideoThumbnail($ufile, $file->getRealPath()));
                        } else {
                            @unlink($file->getRealPath());
                        }
                    }
                }
            } catch (Exception $ex) {
                $ufile->delete();
                Log::error($ex);
                return abort(500);
            }
        }
        return response()->json([
            'url' => route('api:upload:get', [$ufile->share_token, str_slug($ufile->filename, "-")]) . ".$ufile->filetype",
            'deletion_url' => route('api:upload:delete', $ufile->deletion_token),
            'info_url' => route('api:upload:info', [$ufile->share_token, str_slug($ufile->filename, "-")])
        ]);
    }
    public function delupload($deltoken, Request $r)
    {
        $v = Validator::make([
            'key' => $deltoken
        ], [
            'key' => 'required|exists:uploads,deletion_token',
        ]);
        if ($v->fails()) return $v->errors();
        $file = Uploads::where('deletion_token', $deltoken)->first();
        $fileHash = $file->getFilePath(false);
        $store = Storage::disk($file->driver);
        if ((!$store->exists($fileHash) && $file->delete()) || $store->delete($fileHash) && $file->delete()) {
            return response()->json([
                'message' => $file->filename . ' has been deleted'
            ]);
        }
        return response()->json([
            'message' => 'file not found or the file does not exist'
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
    public function getInfo($token, $slug = null, Request $r)
    {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if ($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->with('user')->first();
        $file->humsize = $this->bytesToHuman($file->filesize);
        if (!Storage::disk($file->driver)->exists($file->getFilePath)) {
            return abort(404);
        }
        return view('info')->with(['file' => $file]);
    }

    /**
     * @param Uploads $file
     * @return Media
     */
    private function getThumbnail(Uploads $file)
    {
        return $file->getLatestThumbnail();
    }
    public function getThumb($token)
    {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,thumb_token',
        ]);
        if ($v->fails()) return $v->errors();
        $file = Uploads::where('thumb_token', $token)->first();
        $media = $this->getThumbnail($file);
        $fs = Storage::disk('thumbnails')->getDriver();
        $stream = $fs->readStream($file->thumb_token);
        return response()->stream(function () use ($stream) {
            while (ob_get_level() > 0) ob_end_flush();
            fpassthru($stream);
        }, 200, [
            'Content-Type' => $media->mime_type,
        ]);
    }
    public function videoEmbed($token, $slug = null)
    {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if ($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->with('user')->first();
        return view('embed')->with(['file' => $file]);
    }
    public function showDownload()
    {
        return view('post_download');
    }
    public function getDownload(Request $req, $token)
    {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if ($v->fails()) return redirect()->back()->withErrors($v->errors());
        $file = Uploads::where('share_token', $token)->first();
        $fileHash = $file->getFilePath();
        $store = Storage::disk($file->driver);
        $fs = $store->getDriver();
        $driverConfig = config('filesystems.disks.' . $file->driver, null);
        if ($driverConfig === null) {
            return abort(403);
        }
        if (!$store->exists($fileHash)) {
            return abort(404);
        }
        if ($driverConfig['driver'] !== 'local') {
            $timeout = now()->addMinutes(30);
            return redirect()->route('post:download')->with(['file' => $file, 'tempUrl' => $store->temporaryUrl($fileHash, $timeout), 'expireAt' => $timeout]);
        }
        $stream = $fs->readStream();
        return response()->stream(function () use ($stream) {
            while (ob_get_level() > 0) ob_end_flush();
            fpassthru($stream);
        }, 200, [
            'Content-Type' => $file->filemime,
            'Content-Disposition' => 'attachment; ' . $file->filename
        ]);
    }
    public function getfile(Request $request, $token, $slug = null)
    {
        $v = Validator::make([
            'key' => $token
        ], [
            'key' => 'required|exists:uploads,share_token',
        ]);
        if ($v->fails()) return $v->errors();
        $file = Uploads::where('share_token', $token)->first();
        $fileHash = $file->getFilePath();
        $store = Storage::disk($file->driver);
        $fs = $store->getDriver();
        $driverConfig = config('filesystems.disks.' . $file->driver, null);
        if ($driverConfig === null) {
            return abort(403);
        }
        if (!$store->exists($fileHash)) {
            return abort(404);
        }
        if ($driverConfig['driver'] !== 'local') {
            if (!preg_match('/^(video|audio|image)/', $file->filemime)) {
                return redirect()->to($store->temporaryUrl($fileHash, now()->addMinutes(5)));
            }
            return redirect()->to($store->url($fileHash));
        }
        $stream = $fs->readStream($fileHash);
        if (!preg_match('/^(video|audio)\/(ogg|mp3|mp4|mpeg|webm)/', $file->filemime)) {
            return response()->stream(function () use ($stream) {
                while (ob_get_level() > 0) ob_end_flush();
                fpassthru($stream);
            }, 200, [
                'Content-Type' => $file->filemime,
                'Content-Disposition' => 'inline; ' . $file->filename
            ]);
        }
        if (preg_match('/mpeg$/', $file->filemime) && $file->filemime != "audio/mp3") {
            $file->filemime = "audio/mp3";
            $file->save();
        }
        $size = $file->filesize;
        $start = 0;
        $length = $size;
        $status = 200;
        $type = $file->filemime;
        $headers = [
            'Content-Type' => $type, 'Content-Length' => $size, 'Accept-Ranges' => 'bytes',
            'Content-Disposition' => 'inline; ' . $file->filename
        ];

        if (false !== $range = $request->server('HTTP_RANGE', false)) {
            list($param, $range) = explode('=', $range);
            if (strtolower(trim($param)) !== 'bytes') {
                header('HTTP/1.1 400 Invalid Request');
                exit;
            }
            list($from, $to) = explode('-', $range);
            if ($from === '') {
                $end = $size - 1;
                $start = $end - intval($from);
            } elseif ($to === '') {
                $start = intval($from);
                $end = $size - 1;
            } else {
                $start = intval($from);
                $end = intval($to);
            }
            $length = $end - $start + 1;
            $status = 206;
            $headers['Content-Range'] = sprintf('bytes %d-%d/%d', $start, $end, $size);
        }
        return response()->stream(function () use ($stream, $start, $length) {
            fseek($stream, $start, SEEK_SET);
            echo fread($stream, $length);
            fclose($stream);
        }, $status, $headers);
    }
}
