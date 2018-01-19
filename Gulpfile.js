var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var pump = require('pump');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

var input = ['./scss/**/*.scss'];
var output = './dist';

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassOptions = {
    outputStyle: 'compact'
};

gulp.task('clean', function() {
    return gulp.src([output], { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('serve', ['sass-dev'], function() {

    browserSync.init({
        port: 3000,
        server: "./"
    });

    gulp.watch(input, ['sass-dev']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass-dev', function() {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());
});

gulp.task('sass', ['clean'], function() {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));
});

gulp.task('uglify-js', ['clean'], function(cb) {

    var uglifyOptions = {
        mangle: true,
        preserveComments: 'license'
    };

    pump([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest(output)
    ], cb);

});

gulp.task('rename', ['sass', 'uglify-js'], function() {
    return gulp.src([output + "/*.css", output + "/*.js"])
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(output));
});

gulp.task('minify-css', ['rename'], function() {
    return gulp.src(output + '/*.min.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(output));
});


gulp.task('gzip', ['rename'], function() {
    return gulp.src([output + "/*.min.css", output + "/*.min.js"])
        .pipe(gzip())
        .pipe(gulp.dest(output));
});


gulp.task('build:prod', ['clean', 'sass', 'uglify-js', 'rename', 'minify-css', 'gzip']);
gulp.task('build:dev', ['clean', 'sass-dev', 'serve']);
gulp.task('default', ['build:dev']);
