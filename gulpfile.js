const { src, dest } = require('gulp'),
      imagemin = require('gulp-imagemin');

function minifyPic() {
  return src('./images/*')
    .pipe(imagemin([imagemin.mozjpeg({quality: 75, progressive: true})]))
    .pipe(dest('./dist/'));
}

module.exports.default = minifyPic;
