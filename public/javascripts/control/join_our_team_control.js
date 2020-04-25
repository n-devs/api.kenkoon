const express = require('express');
// const router = express.Router();

const JoinOurTeamSchema = require('../schema/join_our_team_schema');
const ApiResponseJson = require('api-response-json')
var d = new Date();
exports.on = (req, res, next) => {
    JoinOurTeamSchema.find()
        .exec(function (error, join_our_team_schema) {
            if (error) {
                return next(error);
            } else {
                if (join_our_team_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('JoinOurTeamSchema successfully!', res, join_our_team_schema)
                }
            }
        });
};

exports.onId = (req, res, next) => {
    JoinOurTeamSchema.find({ _id: req.params.id })
        .exec(function (error, home_slide_img) {
            if (error) {
                return next(error);
            } else {
                if (home_slide_img === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('JoinOurTeamSchema successfully!', res, home_slide_img)
                }
            }
        });
};

exports.created = (req, res, next) => {

    var data = new JoinOurTeamSchema({
        show: req.body.show,
        message_en: req.body.message_en,
        message_th: req.body.message_th,
        email: req.body.email
    })
    data.save(function (error, join_our_team_schema) {
        if (error) {
            console.log(error);
            ApiResponseJson.error(error.message, res);
        } else {
            ApiResponseJson.created('create JoinOurTeamSchema successfully!', res, join_our_team_schema);
        }
    })
};

exports.update = (req, res, next) => {
    const join_our_team_schema_id = JoinOurTeamSchema.where({ _id: req.params.id });
    join_our_team_schema_id.update(req.body)
        .exec(function (error, join_our_team_schema) {
            if (error) {
                return next(error);
            } else {
                if (join_our_team_schema === null) {
                    ApiResponseJson.error(error.message, res);
                } else {
                    ApiResponseJson.ok('JoinOurTeamSchema successfully!', res, join_our_team_schema)
                }
            }
        });
};

exports.remove = (req, res, next) => {
    JoinOurTeamSchema.remove({ _id: req.params.id })
        .exec()
        .then(join_our_team_schema => {
            ApiResponseJson.ok('Delete successfully!', res, join_our_team_schema)
        })
        .catch(error => {
            console.log(error);
            ApiResponseJson.error(error.message, res)
        });

};