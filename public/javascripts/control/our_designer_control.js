const express = require('express');
// const router = express.Router();

const OurDesignerSchema = require('../schema/our_designer_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    OurDesignerSchema.find()
        .exec(function (error, our_designer_schema) {
            if (error) {
                return next(error);
            } else {
                if (our_designer_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OurDesignerSchema successfully!', res, our_designer_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    OurDesignerSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OurDesignerSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new OurDesignerSchema({
        name: req.body.name,
        show: req.body.show,
        detail_en: req.body.detail_en,
        detail_th: req.body.detail_th,
        main_img: req.body.main_img,
        sub_img0: req.body.sub_img0,
        sub_img1: req.body.sub_img1,
        sub_img2: req.body.sub_img2,
        sub_img3: req.body.sub_img3,
        sub_img4: req.body.sub_img4,
        sub_img5: req.body.sub_img5,
    })
    data.save(function (error, our_designer_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create OurDesignerSchema successfully!', res, our_designer_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const our_designer_schema_id = OurDesignerSchema.where({ _id: req.params.id });
    our_designer_schema_id.update(req.body)
        .exec(function (error, our_designer_schema) {
            if (error) {
                return next(error);
            } else {
                if (our_designer_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OurDesignerSchema successfully!', res, our_designer_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    OurDesignerSchema.remove({ _id: req.params.id })
        .exec()
        .then(our_designer_schema => {
            ApiResponseJson.ok('Delete successfully!', res, our_designer_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};