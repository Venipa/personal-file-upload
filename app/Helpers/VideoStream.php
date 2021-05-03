<?php

namespace App\Helpers;

use Illuminate\Http\Request;

class VideoStream
{
  private Request $request;
  private Uploads $file;
  function __construct(Uploads $file, Request $request)
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

    if (false !== $range = $this->request->server('HTTP_RANGE', false)) {
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
