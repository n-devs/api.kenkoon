const express = require('express');
const router = express.Router();

const collection_control = require('../public/javascripts/control/collection_control');

router.get('/collection', collection_control.on);
router.get('/collection/:id', collection_control.onId);
router.get('/collection/type/:type', collection_control.onType);
router.get('/collection/name/:name', collection_control.onName);
router.get('/collection/number/:number', collection_control.onNumber);
router.post('/collection/create', collection_control.created);
router.put('/collection/update/:id', collection_control.update);
router.delete('/collection/remove/:id', collection_control.remove);

module.exports = router;
