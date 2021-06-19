const { src, dest, parallel, series } = require('gulp'),
      unescapeHTML = require('gulp-unescape-html');

function transHTML() {
  return src(['./_book/*.html', './_book/chapters/*.html'])
    .pipe(unescapeHTML())
    .pipe(dest('./dist'));
}

module.exports.default = transHTML;
