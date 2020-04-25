const express = require('express');
const router = express.Router();

const kenkoon_hq_control = require('../public/javascripts/control/kenkoon_hq_control');

router.get('/kenkoon_hq', kenkoon_hq_control.on);
router.get('/kenkoon_hq/:id', kenkoon_hq_control.onId);
router.post('/kenkoon_hq/create', kenkoon_hq_control.created);
router.put('/kenkoon_hq/update/:id', kenkoon_hq_control.update);
router.delete('/kenkoon_hq/remove/:id', kenkoon_hq_control.remove);

module.exports = router;
