@extends('layouts.app')

@section('body')
    <div class="container">
        <div class="row justify-content-center mb-1">
            <div data-tooltip="{{config('app.name')}} - Files" class="sitelogo md"></div>
            <div class="col-md-12 text-center mb-3">
                <h5>Files</h5>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h3>Logged in as {{$user->name}}</h3>
                @if($files->count() == 0)
                    <div class="alert alert-danger">
                        No Files yet found
                    </div>
                    @else
                <div class="card">
                    <div id="accordion">
                        @foreach($files as $i=>$file)
                            <div class="card">
                                <div class="card-header p-0">
                                    <div class="row justify-content-around">
                                        <div class="col-md-12">
                                            <div class="ripple p-3" id="files-{{$i}}-heading" data-toggle="collapse"
                                                 data-target="#files-{{$i}}" aria-expanded="false"
                                                 aria-controls="files-{{$i}}">{{$file->filename}}</div>
                                            <div class="dropdown card-controls">
                                                <button data-ignore-parent="#files-{{$i}}-heading"
                                                        class="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                                                    <a data-ignore-parent="#files-{{$i}}-heading" class="dropdown-item" download="{{$file->filename}}"
                                                       href="{{route('api:upload:get', $file->share_token)}}">Download</a>
                                                    <a data-ignore-parent="#files-{{$i}}-heading" class="dropdown-item"
                                                       href="{{route('api:upload:get', $file->share_token)}}" target="_blank">Open</a>
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
                                                <td class="text-right font-weight-bold">Filename:</td>
                                                <td>{{$file->filename}}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-right font-weight-bold">Filetype:</td>
                                                <td>{{$file->filetype}}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-right font-weight-bold">Filemime:</td>
                                                <td>{{$file->filemime}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    {{ $files->links() }}
                </div>
                @endif

                <div class="mt-5 mb-3">
                    @include('layouts.footer')
                </div>
            </div>
        </div>
@endsection