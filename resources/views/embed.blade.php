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
        <meta property="og:image" content="{{$logo}}">
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
    <meta property="og:title" content="{{$sitename}}">
    <meta property="og:description" content="{{$sitedescription}}">
    <meta property="og:url" content="{{url()->current()}}">
    <meta property="og:site_name" content="{{$sitename}}">
    <meta property="og:type" content="website">
    @if(preg_match('/video\//', $file->filemime))
        <meta name="twitter:card" content="player">
        <meta name="twitter:player" content="{{$file->getEmbedUrl()}}">
        <meta name="twitter:player:height" content="320">
        <meta name="twitter:player:width" content="480">
        <meta property="og:video" content="{{$file->getFileUrl()}}">
        <meta property="og:video:type" content="{{$file->filemime}}" />

    @elseif(preg_match('/audio\//', $file->filemime))
        <meta name="twitter:card" content="player">
        <meta name="twitter:player" content="{{$file->getEmbedUrl()}}">
        <meta name="twitter:player:height" content="60">
        <meta name="twitter:player:width" content="480">
        <meta property="og:audio" content="{{$file->getFileUrl()}}">
        <meta property="og:audio:type" content="{{$file->filemime}}" />
    @elseif(preg_match('/image\//', $file->filemime))
        <meta name="twitter:card" content="summary">
        <meta property="og:image" content="{{$file->getFileUrl()}}" />
        <meta property="og:image:type" content="{{$file->filemime}}" />
    @endif
@endsection
@section('body')
    @if (preg_match('/video\//', $file->filemime))
        <style>
            .plyr {
                width: 100%;
                height: 100%;
                overflow:hidden!important;
                position: absolute;
                top:0;
                left:0;
            }
        </style>
        <video class="_plyr" @if($file->thumb_token != null) poster="{{$logo}}" @endif >
            <source src="{{route('api:upload:get', $file->share_token)}}" type="{{$file->filemime}}" />
        </video>
    @elseif (preg_match('/audio\//', $file->filemime))
    @section('css')
    <style>
      html, body {
        background-color: transparent;
      }
      #_app {
        display: flex;
      }
      .plyr {
        width: 100%;
        box-shadow: 0 0 24px -12px rgba(50,50,50,.6), 0 0 4px 0 rgba(0,0,0,0.12);
        margin: 20px;
        height: initial;
        border-radius: 8px;
      }
    </style>
    @endsection
        <audio class="_plyr">
            <source src="{{route('api:upload:get', $file->share_token)}}" type="{{$file->filemime}}" />
        </audio>
    @endif
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            new Plyr(document.querySelector('._plyr'), {
              controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
              settings: ['captions', 'quality', 'speed', 'loop']
            });
        });
    </script>
@endsection