const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsletterPageSchema = new Schema({
    show: Boolean,
    title_en: String,
    title_th: String,
    message_en: String,
    message_th: String,
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NewsletterPage', NewsletterPageSchema);
