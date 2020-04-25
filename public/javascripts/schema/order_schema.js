const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  number_phone: String,
  product: Object,
  updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Order', OrderSchema);