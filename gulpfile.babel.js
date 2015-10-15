import gulp from 'gulp'
import babel from 'gulp-babel'

const paths = {
  js: {
    all: 'src/**/*'
  }
}

gulp.task('babel', () => {
  gulp.src(paths.js.all)
    .pipe(babel({stage: 0}))
    .pipe(gulp.dest('./lib'))
})

gulp.task('watch', () => {
  gulp.watch(paths.js.all, ['babel'])
})

gulp.task('build', ['babel'])

gulp.task('default', ['build', 'watch'])
