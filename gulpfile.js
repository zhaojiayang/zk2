var gulp = require("gulp");

var server = require("gulp-webserver");

var sass = require("gulp-sass");

var css = require("gulp-clean-css");

var uglify = require("gulp-uglify");

gulp.task("sass", function(){
    gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(css())
        .pipe(gulp.dest("src/css"))
})

gulp.task("uglify", function(){
    gulp.src("src/sass/*.sass")
        .pipe(uglify())
        .pipe(gulp.dest("src/js"))
})

gulp.task("server", function(){
    gulp.src("src")
        pipe(server({
            port: 8090,
            open: true,
            middleware: function(req, res, next){
                if(req.url === "favicon.ico"){
                    return;
                }
                var pathname = req.url();
            }
        }))
})