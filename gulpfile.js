const { src, dest, parallel } = require('gulp'),
      htmlmin = require('gulp-htmlmin');

function copyFiles() {
  return src(['./src/*.js', './src/*.css'])
    .pipe(dest('./dist'));
}

function minfiyHTML() {
  return src('./src/*.html')
    .pipe(htmlmin( {
      collapseWhitespace: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true
    }))
    .pipe(dest('./dist'));
}

module.exports.default = parallel(copyFiles, minfiyHTML);
