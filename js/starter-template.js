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
        
        var offsetNames = ["#navItemAbout","#navItemPortfolio","#navItemContact"];
        var counter = 0;
        var positionValue = $(document).scrollTop(); 

        var position = $('li:nth-child(2)').position().top;
        console.log(position);
        // get current area
        while (positionValue < $(offsetNames[counter]).position().top + $(offsetNames[counter]).height()){
            counter = counter +1;
            console.log("In section ", offsetNames[counter]);
        }
        console.log("positionValue is ", positionValue);
        console.log("counter is ", counter);
        
        
        // counter value corrisponds what section of the page we are on
        // we can use counter as a possition in the offsetNames array
        // 0 would indicate that we are in the About section
        // 1 would indicate that we are in the Portfolio section and so on...

        var currentActiveElement;
        
        //check to see if a list element exists that has the 'active' class 
        if (jQuery("li.nav-list-item").hasClass("active") ){
            // if this element exists, assign it to the currentActiveElement varriable
            currentActiveElement = jQuery("li.nav-list-item").hasClass("active");
            console.log("active element is ", offsetNames[counter] );
        }
        

        // compare the currentActiveElement var to the list element 
        // whose section we are in
        if (jQuery(currentActiveElement) == jQuery(offsetNames[counter])){
            console.log("same element active");

        } else if (currentActiveElement){ 
                // remove active class
                jQuery(currentActiveElement).removeClass("active");
                console.log("removing an active");
        }
        jQuery(offsetNames[counter]).addClass("active");
        console.log("added active class to element:");
        console.log(jQuery(offsetNames[counter]).attr('id'));
        
        
        
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