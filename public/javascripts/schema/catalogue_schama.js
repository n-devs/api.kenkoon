const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CatalogueSchema = new Schema({
  name: String,
  img: Object,
  show: Boolean,
  file: Object
})

module.exports = mongoose.model('Catalogue', CatalogueSchema);