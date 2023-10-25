'use strict'

//const browserSync = require("browser-sync");
//const browserSync = import('browser-sync')
let gulp =require("gulp")
const sass = require('gulp-sass')(require('sass'));
//let del=require("del")
/*
const del = import('del')
//let imagemin=require("gulp-imagemin")
const imagemin = import('gulp-imagemin')
//let uglify=require("gulp-uglify")
const uglify = import('gulp-uglify')
//let usemin=require("gulp-usemin")
const usemin = import('gulp-usemin')
//let rev=require("gulp-rev")
const rev = import('gulp-rev')
//let cleanCss=require("gulp-clean-css")
const cleanCss = import('gulp-clean-css')
//let flatmap=require("gulp-flatmap")
const flatmap = import('gulp-flatmap')
//let htmlmin=require("gulp-htmlmin")
const htmlmin = import('gulp-htmlmin')
*/

gulp.task("sass",function(){
    gulp.src("./css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
})

gulp.task('sass:watch', function(){
    gulp.watch("./css/*.scss",['sass'])
})

/*
gulp.task('browser-sync', function(){
    let files=["./*.html","./css/*.css","./public/img/*.{png, jpg, gif}","./js/*.js"]
    browserSync.init(files,{
        server:{
            baseDir: "/"
        }
    })
    gulp.watch("./css/*.scss",['sass'])
})

gulp.task('default',['browser-sync'], function(){
    gulp.start("sass:watch")
})

gulp.task('clean', function(){
    return del(['dist'])
})

gulp.task('copyFonts', function(){
    gulp.src("./node_modules/open-iconic/font/fonts/*.{ttf, woff, eof, svg, eot, otf}*")
    .pipe(gulp.dest("./dist/public/fonts"));
})

gulp.task('imagemin', function(){
    return gulp.src("./public/img/*")
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest("./dist/public/img"));
})

gulp.task('usemin', function(){
    return gulp.src("./*.html")
    .pipe(flatmap(function(stream, file){
        return stream
        .pipe(usemin({
            css: [rev()],
            html: [function(){ return htmlmin({collapseWhitespace: true})}],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [cleanCss(),'concat']
        }))
    }))
    .pipe(gulp.dest("dist/"));
})

gulp.task('build', ['clean'], function(){
    gulp.start("copyFonts","imagemin","usemin")
})
*/