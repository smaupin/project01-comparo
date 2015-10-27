$(document).ready( function() {
	console.log('Hey There.');

	var urlBlock = "<div class='row urlBlock'>" + "<br>" + 
				"<div class='col-sm-8'>" + 
				"<div class='input-group'>" + 
				"<input type='text' name = 'urls' class='form-control url-text' placeholder='Type or Copy/Paste your link here'>" + 
				"<span class='input-group-btn'>" +
				"<button class='btn btn-default url-block-btn'>Add Url</button>" +
				"</span>" + "</div>" + "</div>" + "</div>";

	var addUrls = function() {
		$('.urlStack').append(urlBlock);

		// Updates the number of elements with class urlBlock
		var urlCounter = $('.urlBlock').length;
		$('#urlCounter').html("url count: " + urlCounter);
	};

//Add More URL fields when plus is clicked
	$('#plus').on('click', function addUrlByPlus() {
		addUrls();	
	});

	// //send form data to server
	//  $('#main-form').on('submit', function (e) {
	//  	e.preventDefault();
	//  	var formData = $(this).serialize();
	//  	$.post('/pages', formData, function (data) {
	//  		console.log(data);
	//  	});
	//  });


	//Accept the URL when Add Url Button is Clicked
	$('.urlStack').on('click', '.url-block-btn', function addUrlByButton(e) {
		e.preventDefault();
		addUrls();
	});

















});