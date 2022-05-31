import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        image: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        image: `${srcFolder}/img/**/*.{jpg,png,webp,jpeg,gif,mp3,mp4}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/*.js`,
        scss:  `${srcFolder}/scss/*.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        image: `${srcFolder}/img/**/*.{jpg|png|webp|jpeg|gif|mp3|mp4}`,
        scss:  `${srcFolder}/scss/**/*.scss`,
        js:  `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}