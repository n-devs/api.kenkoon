const express = require('express');
// const router = express.Router();

const BranchSchema = require('../schema/branch_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    BranchSchema.find()
        .exec(function (error, branch_schema) {
            if (error) {
                return next(error);
            } else {
                if (branch_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('BranchSchema successfully!', res, branch_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    BranchSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('BranchSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new BranchSchema({
        title: req.body.title,
        sub_title: req.body.sub_title,
        show: req.body.show,
        background_color: req.body.background_color,
        address: req.body.address,
        open: req.body.open,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        tel: req.body.tel,
        fax: req.body.fax,
        email: req.body.email,
        img_map: req.body.img_map,
        link_map: req.body.link_map
    })
    data.save(function (error, branch_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create BranchSchema successfully!', res, branch_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const branch_schema_id = BranchSchema.where({ _id: req.params.id });
    branch_schema_id.update(req.body)
        .exec(function (error, branch_schema) {
            if (error) {
                return next(error);
            } else {
                if (branch_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('BranchSchema successfully!', res, branch_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    BranchSchema.remove({ _id: req.params.id })
        .exec()
        .then(branch_schema => {
            ApiResponseJson.ok('Delete successfully!', res, branch_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};