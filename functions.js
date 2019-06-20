// JavaScript Document

// Add and remove "active" class when an "active" link is already present - ie the first tab of the home page 

//$(document).ready(function () {
	//$('.secondaryNavLink').click(function () {
		//$('secondaryNavLink').removeClass("active");
		//$(this).addClass("active");
	//});
//});

// expand and collapse Secondary Nav

function expandCollapseNav() {
	var element = document.getElementById("secondaryNav");
	element.classList.toggle("expandMenu");
}

// expand and collapse Contact Modal

function expandCollapseModal() {
	var element = document.getElementById("contactModal");
	element.classList.toggle("expandMenu");
}

// Remove "expanded" class as default on small screens 

$(document).ready(function () {
	if ($(window).width() < 768) {
		$("#secondaryNav").removeClass("expandMenu");
	}
});
