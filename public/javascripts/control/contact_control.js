const express = require('express');
// const router = express.Router();

const ContactSchema = require('../schema/contact_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    ContactSchema.find()
        .exec(function (error, contact_schema) {
            if (error) {
                return next(error);
            } else {
                if (contact_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('ContactSchema successfully!', res, contact_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    ContactSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('ContactSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new ContactSchema({
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
        message: req.body.message,
        branch: req.body.branch,
        updated: new Date
    })
    data.save(function (error, contact_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create ContactSchema successfully!', res, contact_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const contact_schema_id = ContactSchema.where({ _id: req.params.id });
    contact_schema_id.update(req.body)
        .exec(function (error, contact_schema) {
            if (error) {
                return next(error);
            } else {
                if (contact_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('ContactSchema successfully!', res, contact_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    ContactSchema.remove({ _id: req.params.id })
        .exec()
        .then(contact_schema => {
            ApiResponseJson.ok('Delete successfully!', res, contact_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};