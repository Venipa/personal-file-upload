<?php

namespace App\Jobs;

use App\Uploads;
use FFMpeg\Coordinate\TimeCode;
use Illuminate\Bus\Queueable;
use Illuminate\Http\UploadedFile;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use FFMpeg as ffm;
use FFMpeg\FFMpeg;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class ProcessVideoThumbnail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $video;
    private $filePath;
    /**
     * Create a new job instance.
     * @param Uploads $video
     * @param string|false $filePath
     */
    public function __construct(Uploads $video, $filePath)
    {
        $this->video = $video;
        $this->filePath = $filePath;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $video = $this->video;
        $filePath = $this->filePath;
        if(!$filePath || !preg_match('/video\//', $video->filemime)) {
            return;
        }
        $ffmpeg = FFMpeg::create(Cache::get('currentEnv', function() {
            return preg_match('/Microsoft Windows/', exec('ver'));
        }) ? [
            'default_disk' => 'local',
            'ffmpeg.binaries'  => storage_path(''). '/ffmpeg.exe',
            'ffprobe.binaries' => storage_path(''). '/ffprobe.exe'
        ] : [
            'default_disk' => 'local',
            'ffmpeg.binaries' => '/usr/bin/ffmpeg',
            'ffprobe.binaries' => '/usr/bin/ffprobe',
            'timeout' => 3600,
            'ffmpeg.threads' => '8'
        ]);
        $media = $ffmpeg->open($filePath);
        $dur = $media->getStreams()->first()->get('duration');
        $frame = $media->frame(new ffm\Coordinate\TimeCode(0,0,0, $dur/2));
        $token = str_random(20);
        $path = storage_path("app/tmp") . '/t_' .$token;
        Log::debug($path);
        $result = $frame->save($path);
        Log::debug(implode(',', [$result->getPathfile(), $path]));
        $video->setThumbnail(new UploadedFile($path, $video->filename), $token);
        @unlink($filePath);
    }
}
