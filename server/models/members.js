const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MemberSchema = new Schema({
	name: String
});

module.exports = mongoose.model('members', MemberSchema);