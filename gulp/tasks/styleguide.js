'use strict';

var gulp = require('gulp');
var rsg = require('react-styleguide-generator');

gulp.task('styleguide', function (done) {
  var rsgProcess = rsg('src/components/**/*.styleguide.js', {
    title: 'World Gaming Federation Styleguide',
    output: 'dist/',
    files: [
      'src/main.css',
      'src/styleguide.css',
      'http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic'
    ],
    reactDocgen: {
      files: ['src/components/**/*.js']
    }
  });

  rsgProcess.generate(function (err) {
    if (err) {
      console.error(String(err));
    }

    done();
  });
});
