const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);