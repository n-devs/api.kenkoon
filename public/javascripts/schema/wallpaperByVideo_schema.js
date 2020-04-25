const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WallpaperByVideoSchema = new Schema({
    title: String,
    link: String,
    show: Boolean,
    opacity: String
});

module.exports = mongoose.model('wallpaper_by_video', WallpaperByVideoSchema);