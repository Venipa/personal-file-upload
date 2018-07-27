@extends('layouts.app')

@section('body')

    <div class="container">
        <div class="row justify-content-center mb-5 mt-5">
            <div class="col">
                <div class="text-center">
                    <div class="sitelogo md"></div>
                    <h4>{{config('app.name')}}</h4>
                    <p class="text-muted text-small">Uploaded by {{$file->user->name}} on the {{(new \Carbon\Carbon($file->created_at))->toFormattedDateString()}}</p>
                </div>
            </div>
        </div>
        <div class="row mt-2 mb-5 justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                <tr>
                                    <th width="100px" class="text-right"></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach([
                                    'Name' => $file->filename,
                                    'Size' => $file->humsize,
                                    'Type' => $file->filetype
                                ] as $k=>$v)
                                <tr>
                                    <td width="100px" class="text-right">{{$k}}</td>
                                    <td>{{$v}}</td>
                                </tr>
                                    @endforeach
                                <tr>
                                    <td class="text-right">Download</td>
                                    <td><a class="btn btn-primary bmd-btn-icon" download="{{$file->filename}}" href="{{route('api:upload:get', [$file->share_token, str_slug($file->filename, "-")])}}">
                                            <i class="mdi mdi-cloud-download"></i>
                                        </a></td>
                                </tr>
                                <tr>
                                    <td class="text-right">Open</td>
                                    <td><a class="btn btn-primary bmd-btn-icon" target="_blank" href="{{route('api:upload:get', [$file->share_token, str_slug($file->filename, "-") . ($file->filetype == "gif" ? ".gif" : "")])}}">
                                            <i class="mdi mdi-open-in-new"></i>
                                        </a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('layouts.footer')
    @endsection