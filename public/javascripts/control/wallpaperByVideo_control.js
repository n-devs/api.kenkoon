const express = require('express');
// const router = express.Router();

const WallpaperByVideoSchema = require('../schema/wallpaperByVideo_schema');
const ApiResponseJson = require('api-response-json')


exports.on = (req, res, next) => {
    WallpaperByVideoSchema.find()
        .exec(function (error, wallpaper_by_video_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_by_video_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('HomeSlide successfully!', res, wallpaper_by_video_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    WallpaperByVideoSchema.find({ _id: req.params.id })
        .exec(function (error, wallpaper_by_video_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_by_video_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('HomeSlide successfully!', res, wallpaper_by_video_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {
    var data = new WallpaperByVideoSchema({
        show: req.body.show,
        title: req.body.title,
        link: req.body.link,
        opacity: req.body.opacity
    })
    data.save(function (error, wallpaper_by_video_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create HomeSlide successfully!', res, wallpaper_by_video_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const HomeSlide_id = WallpaperByVideoSchema.where({ _id: req.params.id });
    HomeSlide_id.update(req.body)
        .exec(function (error, wallpaper_by_video_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_by_video_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('HomeSlide successfully!', res, wallpaper_by_video_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    WallpaperByVideoSchema.remove({ _id: req.params.id })
        .exec()
        .then(wallpaper_by_video_schema => {
            ApiResponseJson.ok('Delete successfully!', res, wallpaper_by_video_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};