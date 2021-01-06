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
        $(mobileMenu).show().animate({
            'width': '65%'
        }, 175);
    })


    // Close Menu    

    $(".menu-exit").click(function () {
        $(mobileMenu).show().animate({
            'width': '0'
        }, 100);
    })

    // Menu Content Functionality


    $(".arrow-drop").click(function () {
        count += 1;
        $(this).addClass("rotate");
        $(".level-two").show();
        if (count % 2 == 0) {
            $(this).removeClass("rotate");
            $(".level-two").hide();

        }


    });


    $(".arrow-drop-sm").click(function () {

            count += 1;
            var dropdownSmall = $(".arrow-drop-sm");
 
            if(dropdownSmall[0] && count == 1) {

                $(".level-three").show();
            }



});

});



    // 
    //     
    //     $(this).addClass("rotate");
    //     $(".level-three").show();
    //     if (count % 2 == 0) {
    //         $(this).removeClass("rotate");
    //         $(".level-three").hide();

    //     }

    // 



