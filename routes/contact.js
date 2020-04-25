const express = require('express');
const router = express.Router();

const contact = require('../public/javascripts/control/contacts');

router.get('/contact', contact.on);
router.get('/contact/:id', contact.onId);
router.post('/contact/create', contact.created);
router.put('/contact/update/:id', contact.update);
router.delete('/contact/remove/:id', contact.remove);

module.exports = router;
