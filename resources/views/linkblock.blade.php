@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-3 pos-center">
                <div class="row justify-content-center mb-3">
                    <div data-tooltip="{{config('app.name')}} - Link" class="sitelogo md"></div>
                </div>
                <h5 class="text-center mb-3">Authorization Needed</h5>
                <div class="card">
                    <div class="card-body">
                        @include('display.errors')
                        <form action="{{route('api:link:post', [$link->token, $link->getSlug()])}}" method="post" class="mb-0">
                            @csrf

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" min="4" required autofocus placeholder="" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group mb-0">
                                <button class="btn btn-raised btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection