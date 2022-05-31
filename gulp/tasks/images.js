import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const image = () => {
    return app.gulp.src(app.path.src.image)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGE",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.newer(app.path.build.image))
        // .pipe(webp())
        // .pipe(app.gulp.dest(app.path.build.image))
        // .pipe(app.gulp.src(app.path.src.image))
        // .pipe(app.plugins.newer(app.path.build.image))
        // .pipe(imagemin({
        //     progressive: true,
        //     svgPlugins: [{removeViewBox: false}],
        //     interlaced: true,
        //     optimizationLevel: 4,
        // }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webp()
            ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.dest(app.path.build.image)
            ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.src(app.path.src.image)
            ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.image)
            ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                imagemin({
                    progressive: true,
                    svgPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 4,
                })
            ))
        .pipe(app.gulp.dest(app.path.build.image))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.image))
        .pipe(app.plugins.browserSync.stream());
}