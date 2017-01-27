import gulp from 'gulp'
import path from 'path'
import less from 'gulp-less'
import browserify from 'gulp-browserify'
import { config } from './config'

gulp.task('default', ['styles', 'scripts'])

gulp.task('styles', () => {
  return gulp.src('./styles/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('scripts', () => {
  return gulp.src('./lib/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/js'))
})
