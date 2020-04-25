const express = require('express');
const router = express.Router();

const order_control = require('../public/javascripts/control/order_control');

router.get('/order', order_control.on);
router.get('/order/:id', order_control.onId);
router.post('/order/create', order_control.created);
router.put('/order/update/:id', order_control.update);
router.delete('/order/remove/:id', order_control.remove);

module.exports = router;
