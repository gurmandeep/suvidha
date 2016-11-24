jQuery(document).ready(function($) {
	$('.sidebar').load("sidebar.html");

	$(document).on("click", "#openChild", function(event) {
		event.preventDefault();
		console.log("cool");
		cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
	});
});