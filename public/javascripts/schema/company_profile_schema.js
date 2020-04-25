const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CompanyProfileSchema = new Schema({
  name: String,
  img: Object,
  show: Boolean,
  detail0_en: String,
  detail1_en: String,
  detail0_th: String,
  detail1_th: String,
})

module.exports = mongoose.model('CompanyProfile', CompanyProfileSchema);