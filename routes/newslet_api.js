const express = require('express');
const router = express.Router();

const newslet_control = require('../public/javascripts/control/newslet_control');

router.get('/newsletter', newslet_control.on);
router.get('/newsletter/:id', newslet_control.onId);
router.post('/newsletter/create', newslet_control.created);
router.put('/newsletter/update/:id', newslet_control.update);
router.delete('/newsletter/remove/:id', newslet_control.remove);

module.exports = router;
