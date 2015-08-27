import gulp from 'gulp'
import jade from 'gulp-jade'
import stylus from 'gulp-stylus'
import babel from 'gulp-babel'
import rmrf from 'gulp-rimraf'
import rename from 'gulp-rename'
import serve from 'gulp-serve'
import config from './config'

const id = makeid()

gulp.task('serve', serve({
  port: 3000,
  default: '.'
}))

gulp.task('jade', () => {
  return gulp.src(['./src/jade/index.jade'])
    .pipe(jade({
      locals: {
        year: new Date().getFullYear(),
        hash: id,
        config: config
      }
    }))
    .pipe(gulp.dest('.'))
})

gulp.task('rm-css', () => {
  return gulp.src('./build/css/*.css', { read: false })
    .pipe(rmrf())
})

gulp.task('stylus', ['rm-css'], () => {
  return gulp.src('./src/styl/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(rename('main-' + id + '.css'))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('build', ['jade', 'stylus'])

gulp.task('watch', () => {
  gulp.watch('./src/jade/*.jade', ['jade'])
  gulp.watch('./src/styl/*.styl', ['stylus'])
})

gulp.task('default', ['build', 'watch', 'serve'])

function makeid(length = 5)
{
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < length; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }    

  return text.toLowerCase();
}