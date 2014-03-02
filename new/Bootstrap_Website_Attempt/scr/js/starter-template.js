// //a)on click
// //b)get nav bar list element id
// //c)check if class is already applied to element
// //d)change current list element class to not active
// //e)change new list element class to active

$(document).ready(function(){
//a)on click
//     $("li.nav-list-item").click(function(event){

//       	// remove all other instances of active list elements
//       	if($("li.nav-list-item").hasClass("active")){
//       		$("li.nav-list-item").removeClass("active");
//       	}

//       	// add active class to this element
//       	jQuery(this).addClass("active");
//     });

// //incomplete, for the title of the site (for when you first arrive on the page)
//     $("#navItemTitle").click(function(event){
//       	if($("li.nav-list-item").hasClass("active")){
//       		$("li.nav-list-item").removeClass("active");
//   	}
//     });


    $(window).scroll(function () {
        // get current area
        var offsetNames = ["#navItemAbout","#navItemPortfolio","#navItemContact"];
        var counter = 0;
        var windowsValue = $(window).scrollTop(); 

        while (windowsValue > jQuery(offsetNames[counter]).offset().top){
            counter = counter +1;
        }

        var currentActiveElement;

        //get current active area
        if (jQuery("li.nav-list-item").hasClass("active") && jQuery("li.nav-list-item").hasClass("active"). ){
            currentActiveElement = jQuery("li.nav-list-item").hasClass("active");
            console.log("active element exists");
        }
            

        if currentActiveElement 
        //compare
        if (currentActiveElement.is(jQuery(offsetNames[counter]))){
            console.log("same element active");
        } else{
        // if different change current active area    
            currentActiveElement.removeClass("active");
            jQuery(offsetNames[counter]).addClass("active");
        } 

        

        
        // if($("li.nav-list-item").hasClass("active")){
        //     $("li.nav-list-item").removeClass("active");
        //     console("removed class");
        // }

        // TODO: the below could be improved
        

        
        
        // if (jQuery(offsetNames[counter]).hasClass("active")){
        //     console.log("added class successful");
        // }
    });
});