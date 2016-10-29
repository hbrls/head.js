var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');


var options = {
  compress: {
    drop_console: true,
  },
};


gulp.task('dist:load', function () {
  var opts = Object.assign({
    output: {
      max_line_len: 80,
    },
  }, options);
  return gulp
    .src('./load/load.js')
    .pipe(uglify(opts))
    .pipe(rev())
    .pipe(gulp.dest('./load'));
});
