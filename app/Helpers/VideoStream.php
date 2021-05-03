<?php

namespace App\Helpers;

use App\Uploads;
use Illuminate\Http\Request;

class VideoStream
{
  /**
   * @var Request
   */
  private $request;
  /**
   * @var Uploads
   */
  private $file;
  function __construct($file, $request)
  {
    $this->file = $file;
    $this->request = $request;
  }

  function stream($stream)
  {
    $size = $this->file->filesize;
    $start = 0;
    $length = $size;
    $status = 200;
    $type = $this->file->filemime;
    $headers = [
      'Content-Type' => $type, 'Content-Length' => $size, 'Accept-Ranges' => 'bytes',
      'Content-Disposition' => 'inline; ' . $this->file->filename
    ];
		// Check for request for part of the stream
		$range = $this->request->header('Range');
		if($range != null) {
			$eqPos = strpos($range, "=");
			$toPos = strpos($range, "-");
			$unit = substr($range, 0, $eqPos);
			$start = intval(substr($range, $eqPos+1, $toPos));
			$success = fseek($stream, $start);
			if($success == 0) {
				$size = $length - $start;
				$status = 206;
				$headers["Accept-Ranges"] = $unit;
				$headers["Content-Range"] = $unit . " " . $start . "-" . ($length-1) . "/" . $length;
			}
		}
		
		$headers["Content-Length"] = $size;

		return response()->stream(function () use ($stream) {
			fpassthru($stream);
		}, $status, $headers);
  }
}
