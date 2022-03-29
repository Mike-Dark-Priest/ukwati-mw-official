const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .scripts('resources/js/google_map.js', 'public/js/google_map.js')
    .scripts('resources/js/jquery.countTo.js', 'public/js/jquery.countTo.js')
    .scripts('resources/js/jquery.easing.1.3.js', 'public/js/jquery.easing.1.3.js')
    .scripts('resources/js/jquery.magnific-popup.min.js', 'public/js/jquery.magnific-popup.min.js')
    .scripts('resources/js/jquery.stellar.min.js', 'public/js/jquery.stellar.min.js')
    .scripts('resources/js/jquery.waypoints.min.js', 'public/js/jquery.waypoints.min.js')
    .scripts('resources/js/magnific-popup-options.js', 'public/js/magnific-popup-options.js')
    .scripts('resources/js/main.js', 'public/js/main.js')
    .scripts('resources/js/modernizr-2.6.2.min.js', 'public/js/modernizr-2.6.2.min.js')
    .scripts('resources/js/owl.carousel.min.js', 'public/js/owl.carousel.min.js')
    .scripts('resources/js/respond.min.js', 'public/js/respond.min.js')
    .scripts('resources/js/simplyCountdown.js', 'public/js/simplyCountdown.js')

    
    .styles('resources/css/animate.css', 'public/css/animate.css')
    
    
    .styles( 'resources/css/icomoon.css','public/css/icomoon.css')
    .styles( 'resources/css/magnific-popup.css','public/css/magnific-popup.css')
    .styles('resources/css/owl.theme.default.min.css','public/css/owl.theme.default.min.css')
    .styles( 'resources/css/style.css','public/css/style.css')
    .less('resources/less/app.less', 'public/css')
    .sourceMaps();
