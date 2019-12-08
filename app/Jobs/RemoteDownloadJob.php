<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use CurlAxel\CurlAxel;
use App\Uploads;
use App\User;
use CurlAxel\Exceptions\CurlException;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;

class RemoteDownloadJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Url to download
     *
     * @var string
     */
    public $url;
    public $userId;
    /**
     * isTorrent, check if url is a torrent magnet link
     *
     * @var bool
     */
    private $isTorrent;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($userId, $url, $isTorrent = false)
    {
        $this->userId = $userId;
        $this->url = $url;
        $this->isTorrent = $isTorrent;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $curl = \CurlAxel\Factory::create();
        $user = User::find($this->userId);
        if ($user == null) {
            return;
        }

        $tmpFilename = str_random(40);
        $tmpFilepath = config('filesystems.disks.remote.root') . '/' . $tmpFilename;
        $originFilename = parse_url($this->url);
        $originFilename = $originFilename['scheme'] . '://' . $originFilename['host'] . $originFilename['path'];
        $curl
            ->setCurlOptions([
                CURLOPT_SSL_VERIFYHOST => false,
                CURLOPT_SSL_VERIFYPEER => false,
                CURLOPT_CAINFO => storage_path() . DIRECTORY_SEPARATOR . 'cacert.pem'
            ])
            ->setUrl($this->url)
            ->setOutput($tmpFilepath);
        try {
            $curl
                ->download();
        } catch (CurlException $ex) {
            Log::error($ex);
            return;
        }
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
        $file = new UploadedFile($tmpFilepath, $originFilename);
        $settings = $user->roles()->first();
        if ($settings != null) {
            $settings = $settings->settings()->first();
        }
        $dynamic = $settings->maxFilesize != null ? ['max:'. $settings->maxFilesize] : [];
        $v = validator([
            'file' => $file
        ],
        [
            'file' => array_replace_recursive(['required'], $dynamic)
        ]);
        if ($v->fails()) {
            @unlink($file->getRealPath());
            throw new Exception($v->errors()->first("file"));
            return;
        }
        $md5File = md5_file($file->getRealPath());
        $ufile = $user->files()->where('hash', $md5File)->first();
        if ($ufile == null) {
            $mimey = new \Mimey\MimeTypes();
            $ufile = Uploads::create([
                'share_token' => $sharetoken,
                'deletion_token' => $deletiontoken,
                'filename' => $file->getClientOriginalName(),
                'filemime' => $mimey->getAllMimeTypes($file->getClientOriginalExtension()),
                'filetype' => $file->getClientOriginalExtension(),
                'filesize' => $file->getSize(),
                'user_id' => $this->userId,
                'hash' => $md5File,
                'driver' => $storageDriverKey
            ]);
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
        if (file_exists($file->getRealPath())) {
            if (preg_match('/^video/', $ufile->filemime)) {
                dispatch(new ProcessVideoThumbnail($ufile, $file->getRealPath()));
            } else {
                @unlink($file->getRealPath());
            }
        }
    }
}
