const { src, dest, series, parallel, watch } = require("gulp");

function defaultTask(cb) {
  console.log(" gulp ok");
  cb();
}

exports.ok = defaultTask;

//任務A
function TaskA(cb) {
  console.log(" taskA");
  cb();
}

// 任務 B
function TaskB(cb) {
  console.log("taskB");
  cb();
}

exports.s = series(TaskA, TaskB); // 不同步執行
exports.p = parallel(TaskA, TaskB); // 同步執行

// =========================   src / dest ======================== //

function sassstyle() {
  return src("./sass/style.scss").pipe(dest("./dist/css"));
}

exports.style = sassstyle

