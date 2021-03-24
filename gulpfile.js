const gulp           = require('gulp');
// const util          = require('gulp-util');
const server         = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');
const htmlbeautify   = require('gulp-html-beautify');
const plumber        = require('gulp-plumber');
const notify         = require('gulp-notify');

const path = {
    root: '.',
    src: {
        nun: './nun/',
    },
    dist: {
        html: './',
    }
}

gulp.task('serve', function () {
    server.init({
        server: {
            baseDir: './',
            directory: false,
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        files: [
            path.dist.html + '*.html',
            path.dist.css + '*.css',
            path.dist.img + '**/*'
        ],
        open: false,
        online: false,
    });
    server.watch('dist', server.reload);
});

gulp.task('nun', function () {
    const options = {
        indentSize: 4
    };
    return gulp
        .src(path.src.nun + 'pages/*.+(html|nunjucks)')
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(nunjucksRender({
            path: [path.src.nun]
        }))
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(path.dist.html));
});

gulp.task('watch', function() {
    // nunjucks --> html
    gulp.watch(path.src.nun + '**/*.*', gulp.series('nun'));
});

gulp.task('default', gulp.series(
    gulp.parallel(
        'nun',
    ),
    gulp.parallel(
        'watch',
        'serve'
    )
));