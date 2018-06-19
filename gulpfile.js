var gulp = require("gulp");

var server = require("gulp-webserver");

var sass = require("gulp-sass");

var css = require("gulp-clean-css");

var uglify = require("gulp-uglify");

var url = require("url");

var fs = require("fs");

var path = require("path");

var listdata = require("./mock/data");

gulp.task("sass", function(){
    gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(css())
        .pipe(gulp.dest("src/css"))
})

gulp.task("uglify", function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("src/js"))
})

gulp.task("watch", function(){
    gulp.watch("src/js/*.js", ["uglify"]);
    gulp.watch("src/sass/*.sass", ["sass"]);
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
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === "/" ? "/index.html" : pathname;
                if(pathname === "/api/list"){
                    res.end(JSON.stringify(listdata));
                }else{
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})

gulp.task("dev", ["server", "watch"]);