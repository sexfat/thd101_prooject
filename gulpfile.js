const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb){
   console.log(" gulp ok");
   cb();
}

exports.ok = defaultTask




