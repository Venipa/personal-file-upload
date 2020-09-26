<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),
    'defaultUpload' => env('DEFAULT_UPLOAD_DRIVER', 'uploads'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3", "rackspace"
    |
    */

    'disks' => [

        'localstore' => [
            'driver' => 'local',
            'root' => storage_path(),
        ],
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],
        'remote' => [
            'driver' => 'local',
            'root' => storage_path('app/remote_tmp'),
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL') . '/storage',
            'visibility' => 'public',
        ],
        'uploads' => [
            'driver' => 'local',
            'root' => storage_path('app/uploads'),
        ],
        'thumbnails' => [
            'driver' => 'local',
            'root' => storage_path('app/thumbnails'),
        ],
        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
        ],
        'cdn:testing' => [
            'driver' => 'wasabi',
            'key' => env('WASABI_TEST_ACCESS_KEY_ID'),
            'secret' => env('WASABI_TEST_SECRET_ACCESS_KEY'),
            'region' => env('WASABI_TEST_DEFAULT_REGION', 'eu-central-1'),
            'bucket' => env('WASABI_TEST_BUCKET'),
            'root' => env('WASABI_TEST_ROOT', '/'),
            'alias' => 'cdnvm1.mavis.moe'
        ],
        'cdn:prod' => [
            'driver' => 'wasabi',
            'key' => env('WASABI_ACCESS_KEY_ID'),
            'secret' => env('WASABI_SECRET_ACCESS_KEY'),
            'region' => env('WASABI_DEFAULT_REGION', 'eu-central-1'),
            'bucket' => env('WASABI_BUCKET'),
            'root' => env('WASABI_ROOT', '/'),
            'alias' => 'https://cdnvm1.mavis.moe'
        ]

    ],

];
