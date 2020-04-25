const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WallpaperSchema = new Schema({
    // type: String,
    title: String,
    image: Object,
    show: Boolean,
    opacity: String,
    tableData: Object
});

module.exports = mongoose.model('Wallpaper', WallpaperSchema);