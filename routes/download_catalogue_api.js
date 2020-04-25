const express = require('express');
const router = express.Router();

const download_catalogue_control = require('../public/javascripts/control/download_catalogue_control');

router.get('/download_catalogue', download_catalogue_control.on);
router.get('/download_catalogue/:id', download_catalogue_control.onId);
router.post('/download_catalogue/create', download_catalogue_control.created);
router.put('/download_catalogue/update/:id', download_catalogue_control.update);
router.delete('/download_catalogue/remove/:id', download_catalogue_control.remove);

module.exports = router;
