const express = require('express');
const router = express.Router();

const log_control = require('../public/javascripts/control/log_control');


router.get('/log', log_control.on);
router.post('/update/log', log_control.created);

module.exports = router;
