const express = require('express');
// const router = express.Router();

const CompanyProfileSchema = require('../schema/company_profile_schema');
const ApiResponseJson = require('api-response-json')

exports.on = (req, res, next) => {
    CompanyProfileSchema.find()
        .exec(function (error, company_profile_schema) {
            if (error) {
                return next(error);
            } else {
                if (company_profile_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('company_profile_schema successfully!', res, company_profile_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    CompanyProfileSchema.find({ _id: req.params.id })
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

    var data = new CompanyProfileSchema({
        name: req.body.name,
        img: req.body.img,
        show: req.body.show,
        detail0_en: req.body.detail0_en,
        detail1_en: req.body.detail1_en,
        detail0_th: req.body.detail0_th,
        detail1_th: req.body.detail1_th
    })
    data.save(function (error, company_profile_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create company_profile_schema successfully!', res, company_profile_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const company_profile_schema_id = CompanyProfileSchema.where({ _id: req.params.id });
    company_profile_schema_id.update(req.body)
        .exec(function (error, company_profile_schema) {
            if (error) {
                return next(error);
            } else {
                if (company_profile_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('company_profile_schema successfully!', res, company_profile_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    CompanyProfileSchema.remove({ _id: req.params.id })
        .exec()
        .then(company_profile_schema => {
            ApiResponseJson.ok('Delete successfully!', res, company_profile_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};