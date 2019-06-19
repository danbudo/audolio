// JavaScript Document

// Add and remove "active" class to secondary navigation items

//$(document).ready(function () {
	//$('.secondaryNavLink').click(function () {
		//$('secondaryNavLink').removeClass("active");
		//$(this).addClass("active");
	//});
//});

$(function(){
    var current = location.pathname;
    $('#secondaryNav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})

// expand and collapse Secondary Nav

function expandCollapse() {
	var element = document.getElementById("secondaryNav");
	element.classList.toggle("expandMenu");
}

// Remove "expanded" class on mobile, until clicked

$(document).ready(function () {
	if ($(window).width() < 768) {
		$("#secondaryNav").removeClass("expandMenu");
	}
});
