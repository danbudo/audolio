// JavaScript Document

// Add and remove "active" class when an "active" link is already present - ie the first tab of the home page 

//$(document).ready(function () {
	//$('.secondaryNavLink').click(function () {
		//$('secondaryNavLink').removeClass("active");
		//$(this).addClass("active");
	//});
//});

// Add and remove "active" class to secondary navigation items when URL is matched to link

$(document).ready(function () {
    var current = location.pathname;
    $('#secondaryNav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})

// expand and collapse elements

function expandCollapseNav() {
	var elements = document.getElementsByClassName('secondaryNav contactModal');
	elements.classList.toggle("expandMenu");
}

// Remove "expanded" class on mobile, until clicked

$(document).ready(function () {
	if ($(window).width() < 768) {
		$("#secondaryNav").removeClass("expandMenu");
	}
});
