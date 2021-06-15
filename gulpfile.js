const { src, dest } = require('gulp');

function streamTask() {
  return src('./src/*.js')
    .pipe(dest('./dist'));
}

function promiseTask() {
  return Promise.resolve('the value is ignored');
}

const { EventEmitter } = require('events');

function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 2000);
  return emitter;
}

const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

async function asyncAwaitTask() {
  const { version } = JSON.parse(fs.readFileSync('package.json').toString());
  console.log(version);
  await Promise.resolve('some result');
}

exports.async = asyncAwaitTask;
exports.cbapi = passingCallback;
exports.cberr = callbackError;
exports.cb = callbackTask;
exports.cp = childProcessTask;
exports.events = eventEmitterTask;
exports.promise = promiseTask;
exports.stream = streamTask;
