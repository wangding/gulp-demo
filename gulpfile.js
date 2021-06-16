const { src } = require('gulp'),
      csslint  = require('gulp-csslint');

function lintCSS() {
  return src('./src/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter(require('csslint-stylish')))
    .pipe(csslint.formatter('fail'));
}

module.exports.default = lintCSS;
