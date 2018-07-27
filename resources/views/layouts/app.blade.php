<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name')}}</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    @yield('css')
</head>
<body>
<div class="loading-wrapper" data-loading>
    <div class="loading-icon"></div>
    <div class="loading-circle"></div>
</div>
    @yield('body')
    <script src="{{asset('js/app.js')}}"></script>
@yield('js')
</body>
</html>