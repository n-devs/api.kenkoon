const express = require('express');
// const router = express.Router();

const OrderSchema = require('../schema/order_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    OrderSchema.find()
        .exec(function (error, order_schema) {
            if (error) {
                return next(error);
            } else {
                if (order_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OrderSchema successfully!', res, order_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    OrderSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OrderSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new OrderSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        number_phone: req.body.number_phone,
        product: req.body.product,
        updated: new Date
    })
    data.save(function (error, order_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create OrderSchema successfully!', res, order_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const order_schema_id = OrderSchema.where({ _id: req.params.id });
    order_schema_id.update(req.body)
        .exec(function (error, order_schema) {
            if (error) {
                return next(error);
            } else {
                if (order_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('OrderSchema successfully!', res, order_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    OrderSchema.remove({ _id: req.params.id })
        .exec()
        .then(order_schema => {
            ApiResponseJson.ok('Delete successfully!', res, order_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};