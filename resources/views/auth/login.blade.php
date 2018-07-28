@extends('layouts.app')
@section('body')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-5 col-md-3 pos-center">
                <div class="row justify-content-center mb-3">
                    <div data-tooltip="{{config('app.name')}} - Login" class="sitelogo md"></div>
                </div>

                <div class="card">
                    <div class="card-body">
                        @include('display.errors')
                        <form action="{{route('login')}}" method="post" class="m-0">
                            {{csrf_field()}}
                            <div class="form-group">
                                <label for="mail">Email</label>
                                <input type="email"
                                       required
                                       class="form-control" name="email" id="mail" aria-describedby="helpId" placeholder="">
                                <small id="helpId" class="form-text text-muted">Use valid mails, temporary emails will be deleted upon detection</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password"
                                       required
                                       class="form-control" name="password" id="password" aria-describedby="helpId"
                                       placeholder="">
                                <small id="helpId" class="form-text text-muted">Requirement: Minimum Length of 5 characters</small>
                            </div>
                            <button type="submit" class="btn btn-primary btn-raised">Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection