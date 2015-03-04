'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less_compiler', function () {

  return gulp.src('public/styles/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('clean', del.bind(null, ['.tmp']));

gulp.task('serve', ['less_compiler'], function() {

  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [ 'public'],
      routes: {
        '/styles': 'styles'
      }
    }
  });

  gulp.watch([
    'public/styles/**/*.less'
  ]).on('change', reload);

  gulp.watch('public/styles/**/*.less', ['less_compiler', reload]);
});
