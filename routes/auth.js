const express = require('express');
const router = express.Router();

const auth = require('../public/javascripts/control/authentication');


router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/dashboard', auth.dashboard);
router.get('/logout', auth.logout);

module.exports = router;
