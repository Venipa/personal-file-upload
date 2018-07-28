@if ($errors->any())
    <div class="alert alert-danger">
        <div><i class="mdi mdi-alert"></i> <b class="font-weight-bold">Error</b></div>
        @foreach ($errors->all() as $error)
            <div>{{ $error }}</div>
        @endforeach
    </div>
@endif