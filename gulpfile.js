'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    ts = require('gulp-typescript'),
    reload = browserSync.reload;

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        ts: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { 
        html: 'dev/*.html',
        favicon: 'dev/*.ico',
        js: 'dev/js/main.js',
        ts: 'dev/ts/main_test.ts',
        style: 'dev/css/main.scss',
        img: 'dev/img/**/*.*', 
        fonts: 'dev/fonts/**/*.*'
    },
    watch: { 
        html: 'dev/**/*.html',
        js: 'dev/js/**/*.js',
        ts: 'dev/ts/**/*.ts',
        style: 'dev/css/**/*.scss',
        img: 'dev/img/**/*.*',
        fonts: 'dev/fonts/**/*.*'
    },
    clean: 'build/'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); 
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(sourcemaps.init()) 
        .pipe(uglify()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); 
});

gulp.task('ts:build', function () {
    gulp.src(path.src.ts) 
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest(path.build.ts)) 
        .pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(prefixer())
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('favicon:build', function() {
    gulp.src(path.src.favicon)
        .pipe(gulp.dest(path.build.html))
});

gulp.task('build', [
    'html:build',
    'js:build',
    //'ts:build',
    'style:build',
    'image:build',
    'fonts:build',
    'favicon:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.ts], function(event, cb) {
        gulp.start('ts:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);