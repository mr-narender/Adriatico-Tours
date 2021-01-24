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

  // Extend Width Of Menu To 100% When On Screen Size (< 480px)

  if ($(window).width() < 490) {
    $(mobileMenu).show().animate(
      {
        width: "100%",
      },
      175
    );
  } else {
    $(mobileMenu).show().animate(
      {
        width: "70%",
      },
      175
    );
  }
});

// Close Menu

$(".menu-exit").click(function () {
  $(mobileMenu).show().animate(
    {
      width: "0",
    },
    100
  );

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
}

//Event Handler

$(".arrow-drop-lg").click(function () {
  countTwo += 1;
  expandLevelTwo();
});

//Third Level Expand

$(".trigger-one").click(function () {
  countThree += 1;

  $(".trigger-one").addClass("rotate");
  $(".second,.third").hide();
  $(".first").show();
  $(".trigger-two,.trigger-three").removeClass("rotate");

  if (countThree % 2 == 0) {
    $(".trigger-one").removeClass("rotate");
    $(".first").hide();
  }

  countThree = 0;
});

$(".trigger-two").click(function () {
  countThree += 1;

  $(".trigger-two").addClass("rotate");
  $(".first,.third").hide();
  $(".second").show();
  $(".trigger-one,.trigger-three").removeClass("rotate");

  if (countThree % 2 == 0) {
    $(".trigger-two").removeClass("rotate");
    $(".second").hide();
  }

  countThree = 0;
});

$(".trigger-three").click(function () {
  countThree += 1;

  $(".trigger-three").addClass("rotate");
  $(".first,.second").hide();
  $(".third").show();
  $(".trigger-one,.trigger-two").removeClass("rotate");

  if (countThree % 2 == 0) {
    $(".trigger-three").removeClass("rotate");
    $(".third").hide();
  }
  countThree = 0;
});

// Expand Search Mobile

$(".search-expand").click(function () {
  $(this).hide();
  $(".mobile_menu-content").css("margin-right", "0");
  $(".mobile-search").css({ display: "flex", "align-items": "center" });
});

// Close Search Mobile

$(".search-hide").click(function () {
  $(".mobile-search").hide();
  $(".search-expand").show();
  $(".mobile_menu-content").css("margin-right", "auto");
});

// Typing Effect Homepage Hero Section

// Refrence W3Schools (https://www.w3schools.com/howto/howto_js_typewriter.asp)

$("document").ready(function () {
  var i = 0;
  var heroTxt =
    "Welcome to Adriatico Tours! Explore the best of Croatian tradition and culture";
  var speed = 45;

  function typeEffect() {
    if (i < heroTxt.length) {
      if (document.querySelector(".hero-section_intro")) {
        document.querySelector(
          ".hero-section_intro"
        ).innerHTML += heroTxt.charAt(i);
      }
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();
});

// FAQ'S Dropodown Funcionality

let dropdownTrigger = $(".question-dropdown i");

// Show/Hide Answer and rotate plus sign

$(dropdownTrigger).click(function () {
  let paragraphState = $(this).prev().parent().children("p").css("display");

  if (paragraphState === "none") {
    $(this).css("transform", "rotate(-135deg)");
    $(this).prev().parent().children("p").show();
  } else if (paragraphState === "block") {
    $(this).css("transform", "rotate(90deg)");
    $(this).prev().parent().children("p").hide();
  }
});
