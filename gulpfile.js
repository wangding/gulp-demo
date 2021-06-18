const { src, dest, parallel } = require('gulp'),
      spritesmith = require('gulp.spritesmith');

function copy() {
  return src('./src/*')
    .pipe(dest('./dist'));
}

function sprite() {
  return src('./src/icons/*.png')
     .pipe(spritesmith({
       imgName: 'icons.png',
       cssName: 'icons.css'
     }))
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copy, sprite);
