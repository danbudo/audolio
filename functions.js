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

// remove all .active classes when clicked anywhere

hide = true;
$('body').on("click", function () {
    if (hide) $('.primary a').removeClass('expandMenu');
    hide = true;
});

// Remove "expanded" class as default on small screens 

$(document).ready(function () {
	if ($(window).width() < 768) {
		$("#secondaryNav").removeClass("expandMenu");
	}
});
