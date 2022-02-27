@extends('layouts.app')
@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-xl-4 pos-center">
                <div class="row justify-content-center mb-3">
                    <div data-tooltip="{{config('app.name')}} - Link" class="sitelogo md"></div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <form action="{{route('link:add')}}" method="post" class="mb-0">
                            @csrf

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="#link">Link</label>
                                        <input type="url" name="link" class="form-control" required autofocus autocomplete="url" id="link">

                                        @if($errors->has('link'))
                                            @foreach($errors as $error)
                                                <small class="text-danger">{{$error}}</small>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="#password">Password</label>
                                        <input type="password" name="password" class="form-control" autocomplete="off" id="password">
                                        <small class="text-muted">Leave empty to disable Password</small>
                                        @if($errors->has('password'))
                                            @foreach($errors as $error)
                                                <small class="text-danger">{{$error}}</small>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                              <div class="col-md-12">
                                  <div class="form-group">
                                      <label for="#wait">Wait</label>
                                      <input type="number" name="wait" min="0" max="{{60*5}}" class="form-control" autocomplete="off" id="wait">
                                      <small class="text-muted">Leave empty to disable Wait Time</small>
                                      @if($errors->has('wait'))
                                          @foreach($errors as $error)
                                              <small class="text-danger">{{$error}}</small>
                                              @endforeach
                                          @endif
                                  </div>
                              </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mb-0">
                                        <button class="btn btn-primary btn-raised">Create Link</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection