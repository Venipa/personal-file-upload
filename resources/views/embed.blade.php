@extends('layouts.embed')
@section('head')
    <link type="application/json+oembed" href="{{route('api:oembed:upload', $file->share_token)}}" />
    @php
        $sitename =  $file->filename;
        $sitedescription = config('app.name') . " - " . "Who doesnt need a personal Storage for Media and other things, this Storage Service is perfect with use of ShareX. Thats why i made an Storage Service which you can share things fast and easy.";
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
    @if(preg_match('/video\//', $file->filemime))
        <meta name="twitter:card" content="player">
        <meta name="twitter:player" content="{{$file->getEmbedUrl()}}">
        <meta name="twitter:player:height" content="320">
        <meta name="twitter:player:width" content="480">
        <meta name="og:video" content="{{$file->getFileUrl()}}">
        <meta property="og:video:type" content="{{$file->filemime}}" />

    @elseif(preg_match('/audio\//', $file->filemime))
        <meta name="twitter:card" content="player">
        <meta name="twitter:player" content="{{$file->getEmbedUrl()}}">
        <meta name="twitter:player:height" content="60">
        <meta name="twitter:player:width" content="480">
        <meta name="og:audio" content="{{$file->getFileUrl()}}">
        <meta property="og:audio:type" content="{{$file->filemime}}" />
    @elseif(preg_match('/image\//', $file->filemime))
        <meta name="twitter:card" content="summary">
        <meta property="og:image" content="{{$file->getFileUrl()}}" />
        <meta property="og:image:type" content="{{$file->filemime}}" />
    @endif
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