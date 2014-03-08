// //a)on click
// //b)get nav bar list element id
// //c)check if class is already applied to element
// //d)change current list element class to not active
// //e)change new list element class to active

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