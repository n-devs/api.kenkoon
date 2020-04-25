const express = require('express');
const router = express.Router();

const contact_control = require('../public/javascripts/control/contact_control');

router.get('/contact', contact_control.on);
router.get('/contact/:id', contact_control.onId);
router.post('/contact/create', contact_control.created);
router.put('/contact/update/:id', contact_control.update);
router.delete('/contact/remove/:id', contact_control.remove);

module.exports = router;
