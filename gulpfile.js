const { src, dest, parallel } = require('gulp'),
      webp = require('gulp-cwebp');

function minifyPic() {
  return src('./images/*')
    .pipe(webp())
    .pipe(dest('./dist/'));
}

function copyFiles() {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}
module.exports.default = parallel(copyFiles, minifyPic);
