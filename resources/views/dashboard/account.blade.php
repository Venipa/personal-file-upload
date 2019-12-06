@extends('layouts.app')
@section('body')
<app-account :user="{{$user}}"></app-account>
@endsection