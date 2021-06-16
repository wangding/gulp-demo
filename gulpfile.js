const { src } = require('gulp'),
      eslint = require('gulp-eslint');

function lintJS() {
  return src('./src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

module.exports.default = lintJS;
