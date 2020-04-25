const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsletSchema = new Schema({
    email: String,
    subscribe: String,
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Newslet', NewsletSchema);
