// JavaScript Document

//$(document).ready(function() {
	// get current URL path and assign 'active' class
//	var pathname = window.location.pathname;
//	$('nav > a[href="'+pathname+'"]').parent().addClass('active');
//      })

$(function(){
    var current = location.pathname;
    $('nav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})
