// JavaScript Document

// Add active class to nav items

//$(document).ready(function() {
	// get current URL path and assign 'active' class
	//var pathname = window.location.pathname;
	//$('nav > a[href="'+pathname+'"]').addClass('active');
//})

// Add and remove "active" class to secondary navigation items

$(document).ready(function(){
  $('.secondaryNavLink').click(function(){
    $('.secondaryNavLink').removeClass('active');
    $(this).addClass('active');
});
});

// expand and collapse Secondary Nav

function expandCollapse() {
	var element = document.getElementById("secondaryNav");
	element.classList.toggle("expandMenu");
}

// Remove "expanded" class on mobile, until clicked

$(document).ready(function () {
        if($(window).width() < 768) {
           $("#secondaryNav").removeClass("expandMenu");  
        }    
    });