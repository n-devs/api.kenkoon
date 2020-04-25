const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DownloadCatalogueSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  number_phone: String,
  updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('DownloadCatalogue', DownloadCatalogueSchema);