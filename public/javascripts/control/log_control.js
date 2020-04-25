const express = require('express');
// const router = express.Router();
// const randomId = require('random-id');
const os = require('os');

const LogSchema = require('../schema/log_schema');
const ApiResponseJson = require('api-response-json')


exports.on = (req, res, next) => {
    LogSchema.find()
        .exec(function (error, log_schema) {
            if (error) {
                return next(error);
            } else {
                if (log_schema === null) {
                    ApiResponseJson.error('You are not logged in', res);
                } else {
                    ApiResponseJson.ok('logged successfully!', res, log_schema)
                }
            }
        });
};

exports.created = (req, res, next) => {
    // var d = new Date();
    console.log(req.body.view);

    LogSchema.create({
        hostname: os.hostname(),
        ip: os.networkInterfaces(),
        pid: process.pid,
        platform: os.platform(),
        updated: new Date,
        view: 1,
    }, function (err, log_schema) {
        if (err) {
            console.log(err);
            ApiResponseJson.error(err.message, res);
        } else {
            ApiResponseJson.created('create logged successfully!', res, log_schema);
        }
    })
};