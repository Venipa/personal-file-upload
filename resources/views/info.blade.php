<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Info | {{str_slug($file->filename, "-")}}</title>
    <style>
        html, body {
            font-family: -apple-system, sans-serif;
        }
    </style>
</head>
<body>
<div>Name: {{$file->filename}}</div>
<div>Size: {{$file->humsize}}</div>
<div>Type: {{$file->filetype}}</div>
<div><a href="{{route('api:upload:get', [$file->share_token, str_slug($file->filename, "-")])}}" download="{{$file->filename}}">Download</a></div>
<div><a href="{{route('api:upload:get', [$file->share_token, str_slug($file->filename, "-")])}}">Open in new Window</a></div>
</body>
</html>