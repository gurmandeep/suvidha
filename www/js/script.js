jQuery(document).ready(function($) {
	// $('.header').load('header.html');
	$('.sidebar').load("sidebar.html");


	$(document).on("click", ".n", function(event) {
		event.preventDefault();
		console.log("cool");
		cordova.InAppBrowser.open('https://eaadhaar.uidai.gov.in/');
	});

	$('.apply_at').change(function(event) {
		var checkbox =	$('.apply_at:checked').val();
		if(checkbox == "passport_office")
		{
			$(".pass, #passport_office-button").hide();
		}
		else{
			$(".pass, #passport_office-button").show();
		}
	
	});

});