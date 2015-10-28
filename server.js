// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS // DECLARATIOBS
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models/index");

// //trying out open graph - IT WORKS
// var og = require('open-graph');
 
// var url = "http://www.mmajunkie.com";
 
// og(url, function(err, meta){
//     console.log(meta);
// }); 


//MIDDLEWARE
app.set("view engine", "ejs");

app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//database middleware
mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
	'mongodb://localhost/project-01-comparo');
var Page = require('./models/page.js');

//render the landing page from index template
app.get('/', function (req, res) {
  res.render("index");
});

//send info to Comparo Page
app.post('/pages', function (req, res) {
	var page = req.body;
	db.Page.create(page, function (err, page) {
		res.status(200).json(page);
	});
});

//show a single comparo page
app.get('/pages/:id', function (req, res) {
	db.Page.findById(req.params.id).exec( function (err, page) {
		console.log(page);
		res.render('page-show', {page: page});
		
	});
	// var page = pages[req.params.id];
	// res.render('page-show', {page: page});
});


app.listen(process.env.PORT || 3000);
