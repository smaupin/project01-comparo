
var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/project01-comparo");

mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
	'mongodb://localhost/project-01-comparo');
	
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	// console.log("Annie helps me not go crazy.");
});


module.exports.Page = require("./page.js");
module.exports.User = require("./user.js");
