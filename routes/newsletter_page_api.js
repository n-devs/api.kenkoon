const express = require('express');
const router = express.Router();

const newsletter_page_control = require('../public/javascripts/control/newsletter_page_control');

router.get('/newsletter_page', newsletter_page_control.on);
router.get('/newsletter_page/:id', newsletter_page_control.onId);
router.post('/newsletter_page/create', newsletter_page_control.created);
router.put('/newsletter_page/update/:id', newsletter_page_control.update);
router.delete('/newsletter_page/remove/:id', newsletter_page_control.remove);

module.exports = router;
