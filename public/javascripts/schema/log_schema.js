const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    hostname: String,
    ip: Object,
    pid: Number,
    platform: String,
    updated: { type: Date, default: Date.now },
    view: String,
})

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;