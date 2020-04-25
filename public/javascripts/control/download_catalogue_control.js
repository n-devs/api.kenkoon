const express = require('express');
// const router = express.Router();

const DownloadCatalogueSchema = require('../schema/download_catalogue_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    DownloadCatalogueSchema.find()
        .exec(function (error, download_catalogue_schema) {
            if (error) {
                return next(error);
            } else {
                if (download_catalogue_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('DownloadCatalogueSchema successfully!', res, download_catalogue_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    DownloadCatalogueSchema.find({ _id: req.params.id })
        .exec(function (error, download_catalogue_schema) {
            if (error) {
                return next(error);
            } else {
                if (download_catalogue_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('DownloadCatalogueSchema successfully!', res, download_catalogue_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new DownloadCatalogueSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        number_phone: req.body.number_phone,
        updated: new Date
    })
    data.save(function (error, download_catalogue_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create DownloadCatalogueSchema successfully!', res, download_catalogue_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const download_catalogue_schema_id = DownloadCatalogueSchema.where({ _id: req.params.id });
    download_catalogue_schema_id.update(req.body)
        .exec(function (error, download_catalogue_schema) {
            if (error) {
                return next(error);
            } else {
                if (download_catalogue_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('DownloadCatalogueSchema successfully!', res, download_catalogue_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    DownloadCatalogueSchema.remove({ _id: req.params.id })
        .exec()
        .then(order_schema => {
            ApiResponseJson.ok('Delete successfully!', res, order_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};