// Navigation

var count = 0;


// Expand destinations link 

$(document).ready(function () {


    $(".expand-lg").click(function () {

        count += 1;
        $(".destination_expand").css("visibility", "visible");
        if (count % 2 == 0) {
            $(".destination_expand").css("visibility", "hidden");
        }

    });


    //Mobile Menu Expand

    var mobileMenu = $(".mobile_menu-expand");
    mobileMenu.width(0);
    $(".menu-open").click(function () {
        $(".level-one").show();
        $(mobileMenu).show().animate({
            'width': '65%'

        }, 175);
    })


    // Close Menu    

    $(".menu-exit").click(function () {
        $(mobileMenu).show().animate({
            'width': '0'
        }, 100);

        $(".level-one").toggle();
        $(".level-two,.level-three").hide();
        $(".arrow-drop-lg, .arrow-drop-sm").removeClass("rotate");


    });


    // Menu Content Functionality



    //Second Level Expand


    $(".arrow-drop-lg").click(function () {
        count += 1;
        $(this).addClass("rotate");
        $(".level-two").show();
        if (count % 2 == 0) {
            $(this).removeClass("rotate");
            $(".level-two").hide();

        }


    });


    //Third level expand

        
      var triggerDrop = $(".arrow-drop-sm");
      var eachDestination = $(".level-three");

        $(triggerDrop).click(function(el) {
        count += 1;  
    

      if(el.target == triggerDrop[0]) {
        $(triggerDrop[0]).addClass("rotate");
        $(eachDestination[0]).show();

            if (count % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[0]).hide();
        }
        
      
    }   else if (el.target == triggerDrop[1]) {
           $(triggerDrop[1]).addClass("rotate");
        $(eachDestination[1]).show();

            if (count % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[1]).hide();
        }
      }  else if (el.target == triggerDrop[2]) {
           $(triggerDrop[2]).addClass("rotate");
        $(eachDestination[2]).show();

            if (count % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[2]).hide();
        }
      }
    
 
    
});

});



