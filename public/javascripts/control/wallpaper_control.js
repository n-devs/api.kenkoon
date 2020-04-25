const express = require('express');
// const router = express.Router();
const ApiResponseJson = require('api-response-json')

const WallpaperSchema = require('../schema/wallpaper_schema');
// const StorageSchema = require('../schema/storage_schema');

// const Response = require('../common/response');

exports.on = (req, res, next) => {
    WallpaperSchema.find()
        .exec(function (error, wallpaper_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Wallpaper Api successfully!', res, wallpaper_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    WallpaperSchema.find({ _id: req.params.id })
        .exec(function (error, wallpaper_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Wallpaper Api successfully!', res, wallpaper_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {
    console.log(req.body);

    var data = new WallpaperSchema({
        // type: "wallpaper",
        title: req.body.title,
        image: req.body.image,
        show: req.body.show,
        opacity: req.body.opacity,
        tableData: req.body.tableData
    })
    data.save(function (error, wallpaper_schema) {
        if (error) {
            // console.log(error);
            // ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('Create Wallpaper Api successfully!', res, wallpaper_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const HomeSlide_id = WallpaperSchema.where({ _id: req.params.id });
    HomeSlide_id.update(req.body)
        .exec(function (error, wallpaper_schema) {
            if (error) {
                return next(error);
            } else {
                if (wallpaper_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Wallpaper Api successfully!', res, wallpaper_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    WallpaperSchema.remove({ _id: req.params.id })
        .exec()
        .then(wallpaper_schema => {
            ApiResponseJson.ok('Delete successfully!', res, wallpaper_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};