@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="text-center pos-center ripple p-2 rounded">
                <div class="sitelogo md"></div>
                <h4>{{config('app.name')}}</h4>
                @include('layouts.footer')
            </div>
        </div>
    </div>
    @endsection