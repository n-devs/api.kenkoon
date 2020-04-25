const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReferenceSchema = new Schema({
    number: String,
    name: String,
    cols: String,
    detail0_en: String,
    detail0_th: String,
    detail1_en: String,
    detail1_th: String,
    show: Boolean,
    main_img: Object,
    sub_img0: Object,
    sub_img1: Object,
    sub_img2: Object,
    sub_img3: Object,
    sub_img4: Object,
    sub_img5: Object,
    sub_img6: Object,
    sub_img7: Object,
    sub_img8: Object,
    sub_img9: Object,
})

module.exports = mongoose.model('Reference', ReferenceSchema);