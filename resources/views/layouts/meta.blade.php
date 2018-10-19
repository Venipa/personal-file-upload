@php
$sitename = config('app.name');
$sidedescription = "";
$logo = asset('images/icon.svg');
$author = 'Created with love by Cascade#0001';
@endphp
@section('title', $sitename)

<!-- Search Engine -->
<meta name="description" content="{{$sitedescription}}">
<meta name="image" content="{{$logo}}">
<!-- Schema.org for Google -->
<meta itemprop="name" content="{{$sitename}}">
<meta itemprop="description" content="{{$sitedescription}}">
<meta itemprop="image" content="{{$logo}}">
<!-- Twitter -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{$sitename}}">
<meta name="twitter:description" content="{{$sitedescription}}">
<meta name="twitter:site" content="{{url()->current()}}">
<meta name="twitter:creator" content="{{$author}}">
<meta name="twitter:image:src" content="{{$logo}}">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:title" content="{{$sitename}}">
<meta name="og:description" content="{{$sitedescription}}">
<meta name="og:image" content="{{$logo}}">
<meta name="og:url" content="{{url()->current()}}">
<meta name="og:site_name" content="{{$sitename}}">
<meta name="og:type" content="website">