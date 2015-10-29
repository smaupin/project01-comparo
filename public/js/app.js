$(document).ready( function() {
	// console.log('Hey There.');



	// var addUrls = function() {
	// 	$('.urlStack').append(urlBlock);

	// 	// Updates the number of elements with class urlBlock
	// 	var urlCounter = $('.urlBlock').length;
	// 	$('#urlCounter').html("url count: " + urlCounter);
	// };

// auto-shifts focus to the last empty url blank on the page.
	// var focusOnLastUrl = function() {
	// 	$('.urlStack .url-text:last-of-type').focus();
	// };


	//Accept the URL when Add Url Button is Clicked or enter returned
	$('.add-url').on('submit', function(e) {
		e.preventDefault();
		// console.log('add url button works');
		var pageId = $('.page-title').data("id");
		var newUrl = $('#url').val();
		// console.log(pageId);
		// console.log(newUrl);
		$.post('/pages/' +  pageId + '/urls', {url: newUrl} )
			.done(function(data) {
				// console.log(data);
				var url = "<a href='" + data + "' target='_blank' class='list-group-item page-link'>" + data + "</a>";
				$('.page-links-list').append(url);
				$('#url').val('').focus();
				var oldNumber = parseInt($('#url-counter').text());
				$('#url-counter').text(oldNumber+=1);
			});
	});

	//send form data to server
	 $('#main-form').on('submit', function (e) {
	 	e.preventDefault();
	 	var formData = $(this).serialize();
	 	$.post('/pages', formData, function (data) {
	 		window.location.href = "/pages/" + data._id;
	 		//console.log(data);
	 	});
	 });


// Login and Signup Form Click Events


















});