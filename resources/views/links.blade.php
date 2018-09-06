@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center mb-1">
            <div data-tooltip="{{config('app.name')}} - Links" class="sitelogo md"></div>
            <div class="col-md-12 text-center mb-3">
                <h5>Links</h5>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                @if($user->links->count() == 0)
                    <div class="alert alert-danger">
                        No Links found yet
                    </div>
                @else
                    <a href="{{route('link:add')}}" class="btn btn-primary btn-raised my-2">Create Link</a>
                <div class="card">
                    <div id="accordion">
                        @foreach($user->links as $i => $link)
                            <div class="card">
                                <div class="card-header p-0">
                                    <div class="row justify-content-around">
                                        <div class="col-md-12">
                                            <div class="ripple p-3" id="files-{{$i}}-heading" data-toggle="collapse"
                                                 data-target="#files-{{$i}}" aria-expanded="false"
                                                 aria-controls="files-{{$i}}">{{$link->getUrlName()}}</div>
                                            <div class="dropdown card-controls">
                                                <button data-ignore-parent="#files-{{$i}}-heading"
                                                        class="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                                                    <a data-ignore-parent="#files-{{$i}}-heading" class="dropdown-item"
                                                       href="{{route('api:link:get', $link->token)}}" target="_blank">Open</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="files-{{$i}}" class="collapse" aria-labelledby="files-{{$i}}-heading"
                                     data-parent="#accordion">
                                    <div class="card-body">
                                        <table class="table table-borderless table-sm">
                                            <thead style="visibility: hidden;">
                                            <tr>
                                                <th style="width: 100px; "></th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="text-right font-weight-bold">Url:</td>
                                                <td><a href="{{route('api:link:get', ['token' => $link->token, 'slug' => $link->getSlug()])}}" target="_blank">{{$link->url}}</a></td>
                                            </tr>
                                            <tr>
                                                <td class="text-right font-weight-bold">Deletion Url:</td>
                                                <td><a href="{{route('api:link:delete', ['token' => $link->deltoken])}}" target="_blank">{{$link->getSlug()}}</a></td>
                                            </tr>
                                            <tr>
                                                <td class="text-right font-weight-bold">Password:</td>
                                                <td>{{str_repeat("*", 8)}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                @endif

                <div class="mt-5 mb-3">
                    @include('layouts.footer')
                </div>
            </div>
        </div>
@endsection