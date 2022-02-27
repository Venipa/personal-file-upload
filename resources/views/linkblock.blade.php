@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-3 pos-center">
                <div class="row justify-content-center mb-3">
                    <div data-tooltip="{{ config('app.name') }} - Link" class="sitelogo md"></div>
                </div>
                @if ($link->password != null)
                    <h5 class="text-center mb-3">Authorization Needed</h5>
                    <div class="card">
                        <div class="card-body">
                            @include('display.errors')
                            <form action="{{ route('api:link:post', [$link->token, $link->getSlug()]) }}" method="post"
                                class="mb-0">
                                @csrf

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" min="4" required autofocus placeholder="" name="password"
                                        id="password" class="form-control">
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-raised btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                @elseif($link->wait != null)
                    <h5 class="text-center mb-3">Waiting... ({{ $link->getDuration() }})</h5>
                @else
                    <h5 class="text-center mb-3">Page not found</h5>
                @endif
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script id="tmx">
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                const a = document.createElement("a");
                a.href = btoa('{{ base64_encode($link->url) }}');
                a.click();
                a.remove();
            }, 2000 + ~~Number('{{ $link->wait * 1000 }}'));
        })
        document.getElementById("tmx").remove();
    </script>
@endsection
