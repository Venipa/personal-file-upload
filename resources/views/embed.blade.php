@extends('layouts.embed')
@section('head')
    <link type="application/json+oembed" href="{{route('api:oembed:upload', $file->share_token)}}" />
    @php
        $sitename = config('app.name') . " - " . $file->filename;
        $sitedescription = "Who doesnt need a personal Storage for Media and other things, this Storage Service is perfect with use of ShareX. Thats why i made an Storage Service which you can share things fast and easy.";
        if($file->thumb_token != null) {
            $logo =  $file->getLatestThumbnailUrl();
        }
    $author = config('app.author');
    @endphp
    <meta name="description" content="{{$file->filename}}">
    @if($file->thumb_token != null)
        <meta name="image" content="{{$logo}}">
        <meta itemprop="image" content="{{$logo}}">
        <meta name="twitter:image:src" content="{{$logo}}">
        <meta name="og:image" content="{{$logo}}">
    @endif
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="{{$sitename}}">
    <meta itemprop="description" content="{{$sitedescription}}">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{{$sitename}}">
    <meta name="twitter:description" content="{{$sitedescription}}">
    <meta name="twitter:site" content="{{url()->current()}}">
    <meta name="twitter:creator" content="{{$author}}">
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="{{$sitename}}">
    <meta name="og:description" content="{{$sitedescription}}">
    <meta name="og:url" content="{{url()->current()}}">
    <meta name="og:site_name" content="{{$sitename}}">
    <meta name="og:type" content="website">
@endsection
@section('body')
    @if (preg_match('/video\//', $file->filemime))
        <script>
            /*window.onload = function() {
                fit($('video, audio')[0], $('.plyr')[0]);
            };*/
        </script>
        <style>
            .plyr {
                width: 100%;
                height: 100%;
                overflow:hidden!important;
            }
        </style>
        <video class="_plyr" @if($file->thumb_token != null) poster="{{$logo}}" @endif >
            <source src="{{route('api:upload:get', $file->share_token)}}" type="{{$file->filemime}}" />
        </video>
    @elseif (preg_match('/audio\//', $file->filemime))
        <style>
            .plyr {
                width: 100%;
                height: 100%;
            }
        </style>
        <audio class="_plyr">
            <source src="{{route('api:upload:get', $file->share_token)}}" type="{{$file->filemime}}" />
        </audio>
    @endif
@endsection