const express = require('express');
// const router = express.Router();

const NewsletSchema = require('../schema/newslet_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    NewsletSchema.find()
        .exec(function (error, newslet_schema) {
            if (error) {
                return next(error);
            } else {
                if (newslet_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletSchema successfully!', res, newslet_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    NewsletSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new NewsletSchema({
        email: req.body.email,
        subscribe: req.body.subscribe,
        updated: new Date
    })
    data.save(function (error, newslet_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create NewsletSchema successfully!', res, newslet_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const newslet_schema_id = NewsletSchema.where({ _id: req.params.id });
    newslet_schema_id.update(req.body)
        .exec(function (error, newslet_schema) {
            if (error) {
                return next(error);
            } else {
                if (newslet_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletSchema successfully!', res, newslet_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    NewsletSchema.remove({ _id: req.params.id })
        .exec()
        .then(newslet_schema => {
            ApiResponseJson.ok('Delete successfully!', res, newslet_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};