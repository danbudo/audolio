// JavaScript Document

//Show Secondary Nav
$(document).ready(function(){
  $("#showMenu").click(function(){
	$("#showMenu").addClass('active');
	//$("#showMenu.active").removeClass('active');
    $("#collapsibleMenu").addClass('expandableMenu');
  });
});

// Hide Secondary Nav
$(document).mouseup(function(e){
    var container = $("#collapsibleMenu");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});
