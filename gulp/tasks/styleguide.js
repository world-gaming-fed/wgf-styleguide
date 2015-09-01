'use strict';

var gulp = require('gulp');
var rsg = require('react-styleguide-generator');

gulp.task('styleguide', function (done) {
  var rsgProcess = rsg('src/components/**/*.styleguide.js', {
    title: 'World Gaming Federation Styleguide',
    output: 'dist/',
    files: [
      'src/main.css',
      'src/styleguide.css'
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
