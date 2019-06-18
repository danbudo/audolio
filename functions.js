// JavaScript Document

// Add and remove "active" class to secondary navigation items

$(document).ready(function(){
  $('.secondaryNavLink').click(function(){
    $('.secondaryNavLink').removeClass('active');
    $(this).addClass('active');
});
	
	        if($(window).width() < 768) {
           $("#secondaryNav").removeClass("expandMenu");  
        }    
});

// expand and collapse Secondary Nav

function expandCollapse() {
	var element = document.getElementById("secondaryNav");
	element.classList.toggle("expandMenu");
}

// Remove "expanded" class on mobile, until clicked

//$(document).ready(function () {
//        if($(window).width() < 768) {
//           $("#secondaryNav").removeClass("expandMenu");  
//        }    
//    });
