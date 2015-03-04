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

gulp.task('clean', require('del').bind(null, ['.tmp']));
gulp.task('serve', ['less_compiler'], function() {

  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'public'],
      routes: {
        'node_modules': 'node_modules',
        'bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'public/styles/**/*.less',
    'public/javascripts/**/*.js'
  ]).on('change', reload);

  gulp.watch('public/styles/**/*.less', ['less_compiler', reload]);

});
