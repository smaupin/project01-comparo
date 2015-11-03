Readme Markdown File for:

COMPARO app by Scot Maupin --

Description:
	Comparo was built to provide a solution for sharing multiple links from different places with multiple users at once. A user can create a Comparo page, and then fill it with any and all links that they want to save or share. That page has a unique link that can be sent to others, who can then access the links provided and add links of their own to the list.

Project Heroku Link:
	https://comparo.herokuapp.com/

Wireframes for Comparo: 
(early and later iterations)
	http://imgur.com/a/HM711

User Stories: 
	https://docs.google.com/document/d/1yZ3-yKRbNrSZmgzYDDTEPmM_12jG4ve0r7TH0Fn3-L4/edit?usp=sharing

Entity Relationship Diagram:
	1 comparo page has MANY links
	1 link is only assigned to 1 comparo page
	future:
	1 user may have MANY comparo pages created
	1 user may have MANY comparo pages visited
	1 comparo page can only have 1 creator
	1 user can comment on MANY links
	1 comment will only have 1 user author

APIs Used:
	No external APIs, APIs built by users as the app is utilized.

Libraries used: 
	JQuery
	ajax

For Future Development:

	1. Users - create signup/login/logout function and add users.

	2. User Pages - Create user pages where the Comparo pages they create and view will be saved and accessible.

	3. COMMENTS - this is where Comparo really lives. Incorporating comments once users are set up, allowing link aggregation to become discussions and information about options or different comparisons.

	4. Graphical Display on Comparo Page - Links to display as title, image, url, and go to link options. Also with comments/ratings.
		-various sorting methods.
		-Allow users to utilize titles automatically on the url, or overwrite with their own custom titles (e.g. "my fav. dress :)", "mom's favorite :(")