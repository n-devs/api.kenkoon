const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    collection_id: String,
    collection_type: String,
    number: String,
    name: String,
    cols: String,
    main_type: String,
    sub_type: String,
    description_detail: String,
    dimension_detail: String,
    dimension_img: Object,
    show: Boolean,
    tableData: Object,
    main_img: Object,
    sub_img0: Object,
    sub_img1: Object,
    sub_img2: Object,
    sub_img3: Object
});

module.exports = mongoose.model('Product', ProductSchema);