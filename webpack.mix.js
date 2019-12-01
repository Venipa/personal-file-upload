let mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
  .js('resources/assets/js/app.js', 'js')
  .sass('resources/assets/sass/app.scss', 'css')
  .webpackConfig({
    output: {
      chunkFilename: 'js/chunks/[id].chunk.[chunkhash].js',
      publicPath: '/',
    }
  }).version();
