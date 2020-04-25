const express = require('express');
// const router = express.Router();

const Reference = require('../schema/reference_schema');
const ApiResponseJson = require('api-response-json')

exports.on = (req, res, next) => {
    Reference.find()
        .exec(function (error, translat) {
            if (error) {
                return next(error);
            } else {
                if (translat === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('translat successfully!', res, translat)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    Reference.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('HomeSlide successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new Reference({
        number: req.body.number,
        name: req.body.name,
        cols: req.body.cols,
        detail0_en: req.body.detail0_en,
        detail0_th: req.body.detail0_th,
        detail1_en: req.body.detail1_en,
        detail1_th: req.body.detail1_th,
        show: req.body.show,
        main_img: req.body.main_img,
        sub_img0: req.body.sub_img0,
        sub_img1: req.body.sub_img1,
        sub_img2: req.body.sub_img2,
        sub_img3: req.body.sub_img3,
        sub_img4: req.body.sub_img4,
        sub_img5: req.body.sub_img5,
        sub_img6: req.body.sub_img6,
        sub_img7: req.body.sub_img7,
        sub_img8: req.body.sub_img8,
        sub_img9: req.body.sub_img9,
    })
    data.save(function (error, translat) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create translat successfully!', res, translat);
        }
    })
};

exports.update = (req, res, next) => {
    const Translat_id = Reference.where({ _id: req.params.id });
    Translat_id.update(req.body)
        .exec(function (error, translat) {
            if (error) {
                return next(error);
            } else {
                if (translat === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('translat successfully!', res, translat)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    Reference.remove({ _id: req.params.id })
        .exec()
        .then(translat => {
            ApiResponseJson.ok('Delete successfully!', res, translat)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};