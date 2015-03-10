'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less_compiler', function () {

  return gulp.src('public/style/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('clean', del.bind(null, ['.tmp']));


gulp.task('test', function (cb) {
  gulp.src(['./router/**/*.js','./model/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(['test/**/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});


gulp.task('serve', ['less_compiler'], function () {

  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['public', '.tmp'],
      routes: {
        '/images': 'images',
        '/styles': 'styles'
      }
    }
  });

  gulp.watch([
    'public/styles/**/*.less'
  ]).on('change', reload);


  gulp.watch('public/styles/**/*.less', ['less_compiler', reload]);
});
gulp.task('default', ['test']);
