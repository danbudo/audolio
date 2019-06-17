// JavaScript Document


// expand and collapse Secondary Nav

function expandCollapse() {
	var element = document.getElementById("secondaryNav");
	element.classList.toggle("expandMenu");
}

// Add active class to nav items

$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('nav > a[href="'+pathname+'"]').addClass('active');
})

// Remove "expanded" class on mobile, until clicked

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
