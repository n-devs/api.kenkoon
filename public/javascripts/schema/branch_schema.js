const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BranchSchema = new Schema({
  title: String,
  sub_title: String,
  show: Boolean,
  background_color: String,
  address: String,
  open: String,
  start_time: String,
  end_time: String,
  tel: String,
  fax: String,
  email: String,
  img_map: Object,
  link_map: String
})

module.exports = mongoose.model('Branch', BranchSchema);