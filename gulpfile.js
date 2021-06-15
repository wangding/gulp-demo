const { src } = require('gulp'),
      htmlhint = require('gulp-htmlhint');

function hintHTML() {
  return src('./src/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.failAfterError());
}

module.exports.default = hintHTML;
