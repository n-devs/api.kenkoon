const express = require('express');
const router = express.Router();

const branch_control = require('../public/javascripts/control/branch_control');

router.get('/branch', branch_control.on);
router.get('/branch/:id', branch_control.onId);
router.post('/branch/create', branch_control.created);
router.put('/branch/update/:id', branch_control.update);
router.delete('/branch/remove/:id', branch_control.remove);

module.exports = router;
