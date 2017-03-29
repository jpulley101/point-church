/*
** @name Point Church
** @version 2.0.0--alpha
** @description Re-written Point Church Theme.
** @author Josh Mobley
** @license GNU GPLv3
*/

// MODULES
var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var eslint       = require('gulp-eslint');
var postcss      = require('gulp-postcss');
var stylelint    = require('gulp-stylelint');
var sourcemaps   = require('gulp-sourcemaps');
var babel        = require('gulp-babel');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var cssnano      = require('cssnano');

// PATHS
var styles = {
    "path": './css/src/',
    "entry": 'main.css',
    "dist": './css/dist/'
};

var scripts = {
    "path": './js/src/',
    "entry": 'main.js',
    "dist": './js/dist'
};

// BROWSER SYNC
gulp.task('browser-sync', function() {

    // initialize browser-sync, documentation here -> https://browsersync.io/docs/gulp
    browserSync.init({
        proxy: "localhost:8888/point-church"  // this assumes a MAMP-based localhost
    });
    
});

// CSS
gulp.task('css', function() {

    // configure postcss + load modules
    var postcssConfig = postcss([
        require( 'precss' ),
        require( 'autoprefixer' ),
        require( 'cssnano' )
    ]);

    // configure error message via notify
    var errorHandler = notify.onError( function(error){
        return "POSTCSS error: " + error.message;
    });

    return gulp
        .src( styles.path + '**/*.css' )      // file input
        .pipe( stylelint({
          failAfterError: false,
          reporters: [
            { formatter: 'string', console: true },
            { formatter: 'verbose', console: true },
          ],
        }))
        .pipe( sourcemaps.init() )              // create sourcemaps
        .pipe( postcssConfig )                  // configure postcss
        .on( 'error', errorHandler )            // report errors via notify
        .pipe( plumber() )                      // continues gulp build on error
        .pipe( sourcemaps.write() )             // write sourcemaps to disk
        .pipe( gulp.dest( styles.dist ))        // write css to disk
        .pipe( browserSync.stream() );          // stream changes into browser
       
});

// JAVASCRIPT 
gulp.task("js", function() {

        return gulp
        
            // input files
            .src('./js/src/**/*.js')

            .pipe( eslint() )
            .pipe( eslint.format() )

            // handles errors through notify
            .on('error', notify.onError(function (error) {
                return "Message to the notifier: " + error.message;
            }))

            // prevents errors from stopping gulp
            .pipe(plumber())

            // create sourcemap
            .pipe(sourcemaps.init())

            // TypeScript object
            .pipe(babel({
			    presets: ['es2015'],
                plugins: [
                    'transform-es2015-modules-amd',
                    'transform-class-properties'
                    ]
            }))

            // output sourcemap
            .pipe(sourcemaps.write('../js/maps/'))

            // output files 
            .pipe(gulp.dest('./js/'))

            // conntection to browser-sync
            .pipe(browserSync.stream());
    });

// PHP
gulp.task( 'php', function() {
    return gulp
        .src( '**/*.php' )
        .pipe( browserSync.stream() );

});

// WATCH
gulp.task( 'watch', function() {

    gulp.watch( styles.path + '**/*.css', ['css'] );    // watch css for changes
    gulp.watch( scripts.path + '**/*.js', ['js'] );     // watch js for changes
    gulp.watch( '**/*.php', ['php'] );

});

gulp.task('default', ['css', 'js', 'php', 'browser-sync','watch']);
