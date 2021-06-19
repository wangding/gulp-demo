const { src, dest, parallel } = require('gulp'),
      webpack = require('gulp-webpack-yawp');

function compileJS() {
  return src('./src/main.js')
    .pipe(webpack())
    .pipe(dest('./dist'));
}

function copyFiles() {
  return src(['./src/*.html', './src/*.css'])
    .pipe(dest('./dist'));
} 

module.exports.default = parallel(copyFiles, compileJS);
