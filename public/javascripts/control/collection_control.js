const express = require('express');
// const router = express.Router();
const ApiResponseJson = require('api-response-json')

const CollectionSchema = require('../schema/collection_schema');
// const StorageSchema = require('../schema/storage_schema');

// const Response = require('../common/response');

exports.on = (req, res, next) => {
    CollectionSchema.find()
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    CollectionSchema.find({ _id: req.params.id })
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.onType = (req, res, next) => {
    CollectionSchema.find({ type: req.params.type })
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.onNumber = (req, res, next) => {
    CollectionSchema.find({ number: req.params.number })
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.onName = (req, res, next) => {
    CollectionSchema.find({ name: req.params.name })
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {
    console.log(req.body);

    var data = new CollectionSchema({
        number: req.body.number,
        name: req.body.name,
        cols: req.body.cols,
        type: req.body.type,
        detail_en: req.body.detail_en,
        detail_th: req.body.detail_th,
        show: req.body.show,
        main_img: req.body.main_img,
        sub_img0: req.body.sub_img0,
        sub_img1: req.body.sub_img1,
        sub_img2: req.body.sub_img2,
        sub_img3: req.body.sub_img3,
    })
    data.save(function (error, collection_schema) {
        if (error) {
            // console.log(error);
            // ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('Create Collection Api successfully!', res, collection_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const collection_schema_id = CollectionSchema.where({ _id: req.params.id });
    collection_schema_id.update(req.body)
        .exec(function (error, collection_schema) {
            if (error) {
                return next(error);
            } else {
                if (collection_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Collection Api successfully!', res, collection_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    CollectionSchema.remove({ _id: req.params.id })
        .exec()
        .then(collection_schema => {
            ApiResponseJson.ok('Delete successfully!', res, collection_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};