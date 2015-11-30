var gulp = require('gulp');

var fileinclude = require('gulp-file-include');

var compass = require('gulp-compass');

var browserSync = require("browser-sync");

var reload = browserSync.reload;

gulp.task('fileinclude', function() {
    gulp.src(['!src/pages/public/*.html','src/pages/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/pages/public/'
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compass', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'release/css',
            sass: 'src/sass',
            relative: false
        }))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./release"
        }
    });
});

// 在命令行中运行 gulp，默认执行 default，你也可以自定义其他命令
gulp.task('default', ['fileinclude','compass','browser-sync'], function() {
    gulp.watch(['src/sass/**/*.scss'], ['compass']);
    gulp.watch(['src/**/*.html'], ['fileinclude']);
});
