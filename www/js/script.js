jQuery(document).ready(function($) {
	$('.sidebar').load("sidebar.html");

	$("#openChild").click(function(event) {
		window.plugins.ChildBrowser.showWebPage('http://www.google.com',
                                        { showLocationBar: true });
	});
});