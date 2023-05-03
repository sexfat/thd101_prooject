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

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function sassstyle() {
  return (
    src("./sass/style.scss")
      .pipe(sourcemaps.init())
      //編譯 sass
      .pipe(sass.sync().on("error", sass.logError))
      .pipe(sourcemaps.write())
      //css 壓縮
      // .pipe(cleanCSS())
      // 跨瀏覽器
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(dest("./dist/css"))
  );
}

exports.style = sassstyle;

function watchTask() {
  watch(["./sass/*.scss", "./sass/**/*.scss"], sassstyle);
}

exports.w = watchTask;

// html template
const fileinclude = require("gulp-file-include");

function html() {
  return src("./*.html")
    .pipe(fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./dist/"));
}
