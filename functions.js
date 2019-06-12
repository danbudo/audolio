// JavaScript Document

//$(function(){
    //var current = location.pathname;
    //$('nav a').each(function(){
        //var $this = $(this);
        // if the current path is like this link, make it active
        //if($this.attr('href').indexOf(current) !== -1){
        //    $this.addClass('active');
        //}
    //})
//})

//Show Secondary Nav
$(document).ready(function(){
  $("#showMenu").click(function(){
	$("#showMenu").addClass('active');
    $("#collapsibleMenu").show();
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
