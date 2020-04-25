const express = require('express');
const router = express.Router();

const our_designer_control = require('../public/javascripts/control/our_designer_control');

router.get('/our_designer', our_designer_control.on);
router.get('/our_designer/:id', our_designer_control.onId);
router.post('/our_designer/create', our_designer_control.created);
router.put('/our_designer/update/:id', our_designer_control.update);
router.delete('/our_designer/remove/:id', our_designer_control.remove);

module.exports = router;
