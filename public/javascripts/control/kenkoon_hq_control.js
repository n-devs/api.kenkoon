const express = require('express');
// const router = express.Router();

const KenkoonHQSchema = require('../schema/kenkoon_hq_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    KenkoonHQSchema.find()
        .exec(function (error, kenkoon_hq_schema) {
            if (error) {
                return next(error);
            } else {
                if (kenkoon_hq_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('KenkoonHQSchema successfully!', res, kenkoon_hq_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    KenkoonHQSchema.find({ _id: req.params.id })
        .exec(function (error, kenkoon_hq_schema) {
            if (error) {
                return next(error);
            } else {
                if (kenkoon_hq_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('KenkoonHQSchema successfully!', res, kenkoon_hq_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new KenkoonHQSchema({
        name: req.body.name,
        show: req.body.show,
        detail_en: req.body.detail_en,
        detail_th: req.body.detail_th,
        img0: req.body.img0,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3
    })
    data.save(function (error, kenkoon_hq_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create KenkoonHQSchema successfully!', res, kenkoon_hq_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const kenkoon_hq_schema_id = KenkoonHQSchema.where({ _id: req.params.id });
    kenkoon_hq_schema_id.update(req.body)
        .exec(function (error, kenkoon_hq_schema) {
            if (error) {
                return next(error);
            } else {
                if (kenkoon_hq_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('KenkoonHQSchema successfully!', res, kenkoon_hq_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    KenkoonHQSchema.remove({ _id: req.params.id })
        .exec()
        .then(kenkoon_hq_schema => {
            ApiResponseJson.ok('Delete successfully!', res, kenkoon_hq_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};