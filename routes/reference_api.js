const express = require('express');
const router = express.Router();

const reference_control = require('../public/javascripts/control/reference_control');

router.get('/reference', reference_control.on);
router.get('/reference/:id', reference_control.onId);
router.post('/reference/create', reference_control.created);
router.put('/reference/update/:id', reference_control.update);
router.delete('/reference/remove/:id', reference_control.remove);

module.exports = router;
