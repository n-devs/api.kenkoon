const express = require('express');
// const router = express.Router();
const ApiResponseJson = require('api-response-json')

const ProductSchema = require('../schema/product_schema');
// const StorageSchema = require('../schema/storage_schema');

// const Response = require('../common/response');

exports.on = (req, res, next) => {
    ProductSchema.find()
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    ProductSchema.find({ _id: req.params.id })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onNumber = (req, res, next) => {
    ProductSchema.find({ number: req.params.number })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onName = (req, res, next) => {
    ProductSchema.find({ name: req.params.name })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onMainType = (req, res, next) => {
    ProductSchema.find({ main_type: req.params.main_type })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onSubType = (req, res, next) => {
    ProductSchema.find({ sub_type: req.params.sub_type })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};


exports.onCollectionId = (req, res, next) => {
    ProductSchema.find({ collection_id: req.params.collection_id })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.onCollectionType = (req, res, next) => {
    ProductSchema.find({ collection_type: req.params.collection_type })
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};


exports.created = (req, res, next) => {
    console.log(req.body);

    var data = new ProductSchema({
        collection_id: req.body.collection_id,
        collection_type: req.body.collection_type,
        number: req.body.number,
        name: req.body.name,
        cols: req.body.cols,
        main_type: req.body.main_type,
        sub_type: req.body.sub_type,
        description_detail: req.body.description_detail,
        dimension_detail: req.body.dimension_detail,
        dimension_img: req.body.dimension_img,
        show: req.body.show,
        tableData: req.body.tableData,
        main_img: req.body.main_img,
        sub_img0: req.body.sub_img0,
        sub_img1: req.body.sub_img1,
        sub_img2: req.body.sub_img2,
        sub_img3: req.body.sub_img3,
    })
    data.save(function (error, product_schema) {
        if (error) {
            // console.log(error);
            // ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('Create Product Api successfully!', res, product_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const HomeSlide_id = ProductSchema.where({ _id: req.params.id });
    HomeSlide_id.update(req.body)
        .exec(function (error, product_schema) {
            if (error) {
                return next(error);
            } else {
                if (product_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('Product Api successfully!', res, product_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    ProductSchema.remove({ _id: req.params.id })
        .exec()
        .then(product_schema => {
            ApiResponseJson.ok('Delete successfully!', res, product_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};