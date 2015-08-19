var gulp = require('gulp')

gulp.task('default', function () {
  gulp.src(['bower_components/normalize.css/normalize.css',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/jquery-ui/jquery-ui.js',
    'bower_components/jquery-ui/themes/start/jquery-ui.css'])
    .pipe(gulp.dest('public/vendor'))

  gulp.src('bower_components/jquery-ui/themes/start/images/*')
    .pipe(gulp.dest('public/vendor/images'))
})
