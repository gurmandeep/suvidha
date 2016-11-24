jQuery(document).ready(function($) {
	$('.sidebar').load("sidebar.html");

	$(document).on("click", "#openChild", function(event) {
		console.log("cool");
		window.plugins.ChildBrowser.showWebPage('http://www.google.com',
                                        { showLocationBar: true });
	});
});