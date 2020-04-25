const express = require('express');
// const router = express.Router();

const CatalogueSchama = require('../schema/catalogue_schama');
const ApiResponseJson = require('api-response-json')

exports.on = (req, res, next) => {
    CatalogueSchama.find()
        .exec(function (error, catalogue_schama) {
            if (error) {
                return next(error);
            } else {
                if (catalogue_schama === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('catalogue schama successfully!', res, catalogue_schama)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    CatalogueSchama.find({ _id: req.params.id })
        .exec(function (error, catalogue_schama) {
            if (error) {
                return next(error);
            } else {
                if (catalogue_schama === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('HomeSlide successfully!', res, catalogue_schama)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new CatalogueSchama({
        name: req.body.name,
        img: req.body.img,
        show: req.body.show,
        file: req.body.file
    })
    data.save(function (error, catalogue_schama) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create catalogue_schama successfully!', res, catalogue_schama);
        }
    })
};

exports.update = (req, res, next) => {
    const catalogue_schama_id = CatalogueSchama.where({ _id: req.params.id });
    catalogue_schama_id.update(req.body)
        .exec(function (error, catalogue_schama) {
            if (error) {
                return next(error);
            } else {
                if (catalogue_schama === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('catalogue_schama successfully!', res, catalogue_schama)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    CatalogueSchama.remove({ _id: req.params.id })
        .exec()
        .then(catalogue_schama => {
            ApiResponseJson.ok('Delete successfully!', res, catalogue_schama)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};