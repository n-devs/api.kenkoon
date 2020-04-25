const express = require('express');
const router = express.Router();

const product_control = require('../public/javascripts/control/product_control');


router.get('/product', product_control.on);
router.get('/product/:id', product_control.onId);
router.get('/product/main_type/:main_type', product_control.onMainType);
router.get('/product/sub_type/:sub_type', product_control.onSubType);
router.get('/product/name/:name', product_control.onName);
router.get('/product/number/:number', product_control.onNumber);
router.get('/product/collection_id/:collection_id', product_control.onCollectionId);
router.get('/product/collection_type/:collection_type', product_control.onCollectionType);
router.post('/product/create', product_control.created);
router.put('/product/update/:id', product_control.update);
router.delete('/product/remove/:id', product_control.remove);

module.exports = router;
