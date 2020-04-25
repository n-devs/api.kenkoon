var express = require('express');
var router = express.Router();

var User = require('../schema/user');
const ApiResponseJson = require('api-response-json')
/* REGISTER USER. */
exports.register = function (req, res) {
    var data = new User(req.body);
    data.save(function (err) {
        if (err) {
            console.log(err);
            ApiResponseJson.error(err.message, res);
        } else {
            ApiResponseJson.created('User registered successfully!', res, { message: "ok!" });
        }
    })
};


/* LOGIN USER. */
exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ username: username, password: password }, function (err, user) {
        if (err) {
            console.log(err);
            ApiResponseJson.error(err.message, res);
        }
        if (!user) {
            ApiResponseJson.notFound('Invalid Email Id or Password!', res);
        } else {
            req.session.user = user;
            ApiResponseJson.ok('User loggedin successfully!', res, user);
        }

    })
};

/* GET DASHBOARD */
exports.dashboard = function (req, res) {
    if (!req.session.user) {
        ApiResponseJson.unauthorized('You are not logged in', res);
        // ApiResponseJson.ok('Welcome to dashboard!', res, req.session.user);
    } else {
        ApiResponseJson.ok('Welcome to dashboard!', res, req.session.user);
    }

};


/* GET LOGOUT */
exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            ApiResponseJson.error(err.message, res);
        }
        else {
            ApiResponseJson.ok('User logged out successfully!', res, {});
        }
    });
};
