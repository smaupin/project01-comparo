
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project01-comparo");

module.exports.Page = require("./page.js");
// module.exports.User = require("./user.js");
