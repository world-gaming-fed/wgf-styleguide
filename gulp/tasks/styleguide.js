'use strict';

var gulp = require('gulp');
var rsg = require('react-styleguide-generator');

gulp.task('styleguide-compile', function (done) {
  var rsgProcess = rsg('src/**/*.styleguide.js', {
    title: 'World Gaming Federation Styleguide',
    output: 'dist/',
    files: [
      'src/main.css',
      'src/styleguide.css',
      'http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic'
    ],
    reactDocgen: {
      files: ['src/**/*.js']
    }
  });

  rsgProcess.generate(function (err) {
    if (err) {
      console.error(String(err));
    }

    done();
  });
});

gulp.task('styleguide', ['styleguide-compile'], function() {
  gulp.src('./src/source_mapping/**')
    .pipe(gulp.dest('./dist/files/source_mapping'));

  gulp.src('./src/base/font/wgficons/fonts/**')
    .pipe(gulp.dest('./dist/assets/fonts'));

  return gulp.src('./src/**/*.styl')
    .pipe(gulp.dest('./dist/files/source_mapping/src'));
});
