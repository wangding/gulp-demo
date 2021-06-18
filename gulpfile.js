const { src, dest } = require('gulp'),
      jsonmin = require('gulp-jsonmin');

function minifyJSON() {
  return src('./src/*.json')
    .pipe(jsonmin())
    .pipe(dest('./dist'));
}

module.exports.default = minifyJSON;
