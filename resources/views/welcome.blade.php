@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="text-center pos-center ripple p-2 rounded">
                <div class="sitelogo md"></div>
                <h4>{{config('app.name')}}</h4>
                @include('layouts.footer')
                <div class="mt-2">
                    <i class="mdi mdi-key"></i>
                    <a href="{{route('login')}}"> Login</a>
                     /
                    <a href="{{route('login')}}"> Register</a>
                </div>
            </div>
        </div>
    </div>
    @endsection