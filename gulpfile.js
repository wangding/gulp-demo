const { src, dest, parallel } = require('gulp'),
      uglify = require('gulp-uglify');

function copyFiles() {
  return src(['./src/*.html', './src/*.css'])
    .pipe(dest('./dist'));
}

function minifyJS() {
  return src('./src/*.js')
    .pipe(uglify())
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copyFiles, minifyJS);
