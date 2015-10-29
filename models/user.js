var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema( {
	email: String,
	password: String,
	joined: { type: Date, default: Date.now },
	madePages: [],
	joinedPages:[]
});

var User = mongoose.model('User', UserSchema);

module.exports = User; 