<?php

namespace App\Console\Commands;

use App\Jobs\ProcessVideoThumbnail;
use App\Uploads;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CreateMissingThumbnails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'thumbnail:redo-missing';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates Thumbnails for missing Video files.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // $files = Uploads::where('filemime', 'LIKE', '%video/%')->where('thumb_token', null)->get();
        // foreach($files as $file) {
        //     if($file->thumb_token != null) return;
        //     $job = (new ProcessVideoThumbnail($file))->delay(5);
        //     Log::debug("Processing $file->filename to create Thumbnail");
        //     dispatch($job);
        // }
    }
}
