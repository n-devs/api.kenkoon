const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OurDesignerSchema = new Schema({
  name: String,
  show: Boolean,
  detail_en: String,
  detail_th: String,
  main_img: Object,
  sub_img0: Object,
  sub_img1: Object,
  sub_img2: Object,
  sub_img3: Object,
  sub_img4: Object,
  sub_img5: Object,
})

module.exports = mongoose.model('OurDesigner', OurDesignerSchema);