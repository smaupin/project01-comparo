//declarations
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// var urlSchema = new Schema ( {
// 	url: String
// });


var PageSchema = new Schema( {
	title: String,
	blurb: String,
	urls: []
});

var Page = mongoose.model('Page', PageSchema);

module.exports = Page;