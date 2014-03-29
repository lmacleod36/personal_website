
// Change active navigation bar element on click
$(document).ready(function(){
//on click
    $("li.nav-list-item").click(function(event){

      	// remove all other instances of active list elements
      	if($("li.nav-list-item").hasClass("active")){
      		$("li.nav-list-item").removeClass("active");
      	}

      	// add active class to this element
      	jQuery(this).addClass("active");
    });

});