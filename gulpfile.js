const { src, dest, parallel } = require('gulp'),
      cssmin = require('gulp-csso');

function copyFiles() {
  return src(['./src/*.html', './src/*.js'])
    .pipe(dest('./dist'));
}

function minifyCSS() {
  return src('./src/*.css')
    .pipe(cssmin())
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copyFiles, minifyCSS);
