const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const typograf = require('gulp-typograf');
const include = require('gulp-include');
const imagemin = require("gulp-imagemin");
const del = require("del");
const webp = require("gulp-webp");
const avif = require("gulp-avif");
const svgSprite = require("gulp-svg-sprite");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");


function styles() {
    return src("app/scss/main.scss")
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(concat("main.min.css"))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest("app/css"))
        .pipe(browserSync.stream())
}

function criticalStyles() {
    return src("app/scss/critical.scss")
    .pipe(scss({outputStyle: "compressed"}))
    .pipe(concat("critical.min.css"))
     .pipe(autoprefixer({
         overrideBrowserslist: ['last 10 versions']
        //  grid: true
     }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream())
}

function stylesSecondary() {
    src([
        "node_modules/normalize.css/normalize.css"
    ])
        .pipe(concat("libs.scss"))
        .pipe(dest("app/scss"))
        .pipe(browserSync.stream())

    return src(['./app/scss/libs.scss'])
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(concat("libs.min.css"))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest("app/css"))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        "app/js/main.js"
    ])
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(dest("app/js"))
        .pipe(browserSync.stream())
}

function images() {
    return src(['app/images/src/*.*', '!app/images/src/*.svg'])
        .pipe(newer('app/images'))
        .pipe(avif({ quality: 90 }))

        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images'))
        .pipe(webp())

        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images'))
        .pipe(imagemin())

        .pipe(dest('app/images'));
}
function sprite() {
    return src('app/images/dist/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                    example: true
                }
            }
        }))
        .pipe(dest('app/images/dist'))
}
function fonts() {
    return src('app/fonts/src/*.*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('app/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'));
}

function pages() {
    return src('app/pages/*.html')
        .pipe(include({
            includePaths: 'app/',
        }))
        // .pipe(typograf({
        //     locale: ['ru', 'en-US', 'uk']
        // }))
        .pipe(dest('app'))
        .pipe(browserSync.stream())
}


function build() {
    return src([
        "app/css/main.min.css",
        "app/fonts/**/*",
        "app/images/**/*",
        "app/js/main.min.js",
        "app/*.html",
    ],
        {
            base: "app"
        })
        .pipe(dest("dist"))
}

function cleanDist() {
    return del("dist")
}

function watching() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch(["app/scss/**/*.scss"], styles);
    watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
    watch(["app/components/*", "app/pages/*"], pages);
    watch(["app/*.html"]).on("change", browserSync.reload)
}


exports.pages = pages; 
exports.styles = styles;
exports.criticalStyles = criticalStyles;
exports.stylesSecondary = stylesSecondary;
exports.watching = watching;
exports.scripts = scripts;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, build); //remove images
exports.default = parallel(styles, criticalStyles, stylesSecondary, scripts, pages, watching);