const express = require('express');
// const router = express.Router();

const NewsletterPageSchema = require('../schema/newsletter_page_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    NewsletterPageSchema.find()
        .exec(function (error, newsletter_page_schema) {
            if (error) {
                return next(error);
            } else {
                if (newsletter_page_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletterPageSchema successfully!', res, newsletter_page_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    NewsletterPageSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletterPageSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new NewsletterPageSchema({
        show: req.body.show,
        title_en: req.body.title_en,
        title_th: req.body.title_th,
        message_en: req.body.message_en,
        message_th: req.body.message_th,
    })
    data.save(function (error, newsletter_page_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create NewsletterPageSchema successfully!', res, newsletter_page_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const newsletter_page_schema_id = NewsletterPageSchema.where({ _id: req.params.id });
    newsletter_page_schema_id.update(req.body)
        .exec(function (error, newsletter_page_schema) {
            if (error) {
                return next(error);
            } else {
                if (newsletter_page_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('NewsletterPageSchema successfully!', res, newsletter_page_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    NewsletterPageSchema.remove({ _id: req.params.id })
        .exec()
        .then(newsletter_page_schema => {
            ApiResponseJson.ok('Delete successfully!', res, newsletter_page_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};