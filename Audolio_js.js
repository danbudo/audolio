// JavaScript Document

$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('nav > a[href="'+pathname+'"]').parent().addClass('active');
})