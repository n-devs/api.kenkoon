const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KenkoonHQSchema = new Schema({
  name: String,
  show: Boolean,
  detail_en: String,
  detail_th: String,
  img0: Object,
  img1: Object,
  img2: Object,
  img3: Object
})

module.exports = mongoose.model('KenkoonHQ', KenkoonHQSchema);