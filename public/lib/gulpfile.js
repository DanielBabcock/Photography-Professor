// var gulp = require('gulp');

// gulp.task('default', function() {
//   // place code for your default task here
// });

// Gulp.js configuration
var
// modules
gulp = require('gulp'),

// development mode?
devBuild = (process.env.NODE_ENV !== 'production'),

// folders
folder = {
  src: 'src/',
  build: 'build/'
}
;