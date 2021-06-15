const {src, dest, parallel} = require('gulp'),
      less = require('gulp-less');

function copyHTML() {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}

function compileLESS() {
  return src('./src/*.less')
    .pipe(less())
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copyHTML, compileLESS);
