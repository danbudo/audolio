// JavaScript Document

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

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

// Add and remove "active" class when an "active" link is already present - ie the first tab of the home page 

//$(document).ready(function () {
	//$('.secondaryNavLink').click(function () {
		//$('secondaryNavLink').removeClass("active");
		//$(this).addClass("active");
	//});
//});
