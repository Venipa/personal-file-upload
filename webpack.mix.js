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
mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[id].chunk.js?id=[chunkhash]'
  }
});
mix
  .js('resources/assets/js/app.js', 'js')
  .sass('resources/assets/sass/app.scss', 'css');
