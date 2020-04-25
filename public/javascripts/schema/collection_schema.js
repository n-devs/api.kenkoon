const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    number: String,
    name: String,
    cols: String,
    type: String,
    detail_en: String,
    detail_th: String,
    show: Boolean,
    main_img: Object,
    sub_img0: Object,
    sub_img1: Object,
    sub_img2: Object,
    sub_img3: Object
});

module.exports = mongoose.model('Collection', CollectionSchema);