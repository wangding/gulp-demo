const { src, dest, parallel } = require('gulp'),
      concat = require('gulp-concat'),
      sourcemaps = require('gulp-sourcemaps');
 
function concatFiles() {
  return src('./src/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('./dist'));
}

function copyFiles() {
  return src(['./src/*.html', './src/*.css'])
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copyFiles, concatFiles);
