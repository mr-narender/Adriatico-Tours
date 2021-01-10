// Navigation

let count = 0;
let countTwo = 0;
let countThree = 0;

// Expand destinations link 

$(".expand-lg").click(function () {

    count += 1;
    $(".destination_expand").css("display", "flex");
    if (count % 2 == 0) {
        $(".destination_expand").css("display", "none");
    }

});


//Mobile Menu Expand

var mobileMenu = $(".mobile_menu-expand");
mobileMenu.width(0);
$(".menu-open").click(function () {

    $(".mobile-search").hide();
    $(".search-expand").show();
    $(".mobile_menu-content").css("margin-right", "auto");

    $(".level-one").show();
    $(mobileMenu).show().animate({
        'width': '70%'

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

function expandLevelTwo() {

    $(".arrow-drop-lg").addClass("rotate");
    $(".level-two").show();
    if (countTwo % 2 == 0) {
        $(".arrow-drop-lg,.arrow-drop-sm").removeClass("rotate");
        $(".level-two,.level-three").hide();
    }

};


//Event Handler

$(".arrow-drop-lg").click(function () {
    countTwo += 1;
    expandLevelTwo();
});


//Third Level Expand
var triggerDrop = $(".arrow-drop-sm");
var eachDestination = $(".level-three");



$(triggerDrop).click(function (el) {
    countThree += 1;

    if (el.target == triggerDrop[0]) {
        $(eachDestination[0]).show();
        $(triggerDrop[0]).addClass("rotate");
        $(eachDestination[1], eachDestination[2]).hide();
        $(triggerDrop[1], triggerDrop[2]).removeClass("rotate");

        if (countThree % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[0]).hide();
        }


    } else if (el.target == triggerDrop[1]) {
        $(eachDestination[1]).show();
        $(triggerDrop[1]).addClass("rotate");
        $(eachDestination[0], eachDestination[2]).hide();
        $(triggerDrop[0], triggerDrop[2]).removeClass("rotate");


        if (countThree % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[1]).hide();
        }
    } else if (el.target == triggerDrop[2]) {
        $(eachDestination[2]).show();
        $(triggerDrop[2]).addClass("rotate");
        $(eachDestination[0], eachDestination[1]).hide();
        $(triggerDrop[0], triggerDrop[1]).removeClass("rotate");

        if (countThree % 2 == 0) {
            $(this).removeClass("rotate");
            $(eachDestination[2]).hide();
        }
    }

});





// Expand Search Mobile

$(".search-expand").click(function () {

    $(this).hide();
    $(".mobile_menu-content").css("margin-right", "0");
    $(".mobile-search").css({ "display": "flex", "align-items": "center" });

});


// Close Search Mobile 

$(".search-hide").click(function () {

    $(".mobile-search").hide();
    $(".search-expand").show();
    $(".mobile_menu-content").css("margin-right", "auto");

});



// Hero Section




// Typing Effect 

// Refrence W3Schools (https://www.w3schools.com/howto/howto_js_typewriter.asp)


$("document").ready(function() {

var i = 0;
var heroTxt = 'Welcome to Adriatico Tours! Explore the best of Croatian tradition and culture';
var speed = 45;

function typeEffect() {
  if (i < heroTxt.length) {
   document.querySelector(".hero-section_intro").innerHTML += heroTxt.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

});

