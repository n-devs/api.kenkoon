const express = require('express');
const router = express.Router();

const catalogue_control = require('../public/javascripts/control/catalogue_control');

router.get('/catalogue', catalogue_control.on);
router.get('/catalogue/:id', catalogue_control.onId);
router.post('/catalogue/create', catalogue_control.created);
router.put('/catalogue/update/:id', catalogue_control.update);
router.delete('/catalogue/remove/:id', catalogue_control.remove);

module.exports = router;
