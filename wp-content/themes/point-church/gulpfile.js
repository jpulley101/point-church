/*
|--------------------------------------------------------------------------
| Required Modules
|--------------------------------------------------------------------------
*/

var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var babel        = require('gulp-babel');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');

/*
|--------------------------------------------------------------------------
| Main Tasks
|--------------------------------------------------------------------------
*/

   
    /*
    |----------------------------------------------
    | Browsersync
    |----------------------------------------------
    */

    gulp.task('browser-sync', function() {

        // initialize browser-sync server on localhost:3000
        browserSync.init({
             proxy: "localhost:8888/point-church"
        });
    });

    /*
    |----------------------------------------------
    | Sass
    |----------------------------------------------
    */

    gulp.task('sass', function() {
        
        return gulp
        
            // input files 
            .src('./sass/**/screen.scss')

            // create sourcemap
            .pipe( sourcemaps.init() )

            // Sass options object
            .pipe( sass( { outputStyle: 'compressed'} )

            // handles errors through notify
            .on('error', notify.onError(function (error) {
                return "Message to the notifier: " + error.message;
            }))
            )

            // prevents errors from stopping gulp
            .pipe(plumber())

            // browser preifixes  
            .pipe(autoprefixer())

            // output sourcemap
            .pipe(sourcemaps.write('../stylesheets/'))

            // output files
            .pipe(gulp.dest('./stylesheets/'))

            // conntection to browser-sync
            .pipe(browserSync.stream());
    });

    /*
    |----------------------------------------------
    | JavaScript - Babel
    |----------------------------------------------
    */

    gulp.task("js", function() {

        return gulp
        
            // input files
            .src('./js/src/**/*.js')

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

    /*
    |----------------------------------------------
    | Twig & PHP
    |----------------------------------------------
    */

    // setup so that changes to the twig and php files can be monitored 
    gulp.task('php', function() {
        
        gulp
        
        .src(['./**/*.php'])

        // conntection to browser-sync
        .pipe(browserSync.stream());
    });

/*
|--------------------------------------------------------------------------
| Watch Task
|--------------------------------------------------------------------------
*/

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/src/**/*.js', ['js']);
    gulp.watch(['./**/*.php'], ['php']);
});

/*
|--------------------------------------------------------------------------
| Default Task
|--------------------------------------------------------------------------
*/

gulp.task('default', ['sass', 'js', 'php', 'browser-sync','watch']);