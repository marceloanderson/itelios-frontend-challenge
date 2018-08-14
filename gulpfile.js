'use strict';

var gulp          = require('gulp');
var imagemin      = require('gulp-imagemin');
var changed       = require('gulp-changed');
var sass          = require('gulp-sass');
var clean         = require('gulp-clean');
var jshint        = require('gulp-jshint');
// var connect       = require('gulp-connect');
var browserSync   = require('browser-sync').create();

var bases = {
    dev: '/',
    build: 'build/'
};

var paths = {
    sass: ['sass/*.scss'],
    scripts: ['js/*.js'],
    html: ['*.html'],
    images: ['images/**/*']
};

gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(bases.build));
});

gulp.task('copy', function () {
    return gulp.src('./products.json')
        .pipe(gulp.dest(bases.build));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        // .pipe(plumber())
        .pipe(sass({
            'sourcemap=none': true,
            noCache: true,
            style:'compressed'
        }).on('error', sass.logError))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        // .pipe(plumber())
        .pipe(changed('build/images'))
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true
            // interlaced: false
        }))
        .pipe(gulp.dest('build/images'));
});

// Lint JavaScript
gulp.task('lint', function () {
  return gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
    // .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        // .pipe(plumber())
        // .pipe(uglify('app.min.js', {
        //     'sourcemap=none': true,
        //     basePath: 'src/js/'
        // }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('html-watch', ['html'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scripts-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('images-watch', ['images'], function (done) {
    console.log('reload');
    browserSync.reload();
    done();
});

gulp.task('copy-watch', ['copy'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['html', 'scripts', 'sass', 'images', 'copy'], function() {

    browserSync.init({
        server: bases.build
    });

    gulp.watch(paths.html, ['html-watch']);
    gulp.watch(['./js/**/*.js'], ['scripts-watch']);
    gulp.watch(['./sass/*.scss'], ['sass']);
    gulp.watch(paths.images, ['images-watch']);
});

gulp.task('default', ['serve']);
gulp.task('build', ['default']);