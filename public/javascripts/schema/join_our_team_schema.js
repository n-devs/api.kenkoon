const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JoinOurTeamSchema = new Schema({
  show: Boolean,
  message_en: String,
  message_th: String,
  email: String
})

module.exports = mongoose.model('JoinOurTeam', JoinOurTeamSchema);