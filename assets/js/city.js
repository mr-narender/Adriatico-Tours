// Display Selected City Content

// Retrive City Name From URL

var readURL = location.toString();
readURL = readURL.substring(readURL.indexOf("?"));
readURL = readURL.split("?").pop();
readURL = readURL.charAt(0).toUpperCase() + readURL.slice(1);

// Populate bread crumbs link with city name

$(".city-name").text(readURL);

function addBlur() {
  $("body").children().addClass("blur");
  $("#hotel-offering").removeClass("blur");
  $("#hotel-offering").children().addClass("blur");
  $(".hotel-offering_popup, .booking-popup").removeClass("blur");
}

function removeBlur() {
  $("body").find("*").removeClass("blur");
}

//Launch/Close Hotel Pop-Up when click See More

function launchHotelpopup() {
  addBlur();
  if ($(window).width() < 1200) {
    $("#hotel-listing").css("visibility", "hidden");
    $("#hotel-offering").css("width", "95%");
  }
  $(".hotel-offering_popup").fadeIn(300);
}

function closeHotelPopup() {
  $(".popup-exit").click(function () {
    $("#hotel-offering").css("width", "85%");
    $(".hotel-offering_popup").fadeOut(300);
    $(".hotel-content_box-two").remove();
    $(".hotel-intro, .loadImages").html("");
    $("#hotel-listing").css("visibility", "visible");
 
    removeBlur();
  });
}

//Launch Close Booking Pop-Up

function launchBookingPopup() {
  addBlur();

  $(".booking-popup").fadeIn(300);
  $("#adult").val(1);
  $("#child").val(0);
  $(".no-adults").html(`(1)`);
  $(".no-children").html(`(0)`);
}

function closeBookingPopup() {
  $(".popup-exit-black").click(function () {
    removeBlur();
    $(".booking-popup").fadeOut(300);
  });
}

// Set Class to handle default location (google maps)
class deaultLocation {
  constructor(cityPosition, hotelPosition) {
    if (cityPosition == null) {
      cityPosition = {
        lat: 44.866623,
        lng: 13.849579,
      };
    }
    if (hotelPosition == null) {
      hotelPosition = {
        lat: 44.866623,
        lng: 13.846579,
      };
    }
    this.cityPosition = cityPosition;
    this.hotelPosition = hotelPosition;
  }
}

// Declare maps function

function initMap(cityPosition, hotelPosition) {
  deault_location = new deaultLocation();
  var map = new google.maps.Map(document.getElementById("city-map"), {
    zoom: 15,
    center: cityPosition,
  });

  var map = new google.maps.Map(document.getElementById("city-map-hotel"), {
    zoom: 17,
    center: hotelPosition,
  });
  new google.maps.Marker({
    position: hotelPosition,
    map,
  });
}

// Check which city was selected - change content based on selection

let imageArray = document.querySelectorAll(".city-img");

if (readURL === "Pula") {
  //load images
  imageArray[0].style.backgroundImage = "url('assets/images/pula-slide-1.png')";
  imageArray[1].style.backgroundImage = "url('assets/images/pula-slide-2.png')";
  imageArray[2].style.backgroundImage = "url('assets/images/pula-slide-3.png')";

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 44.866623,
      lng: 13.849579,
    })
  );

  //change title and about info

  $(".city-title").text("Pula");
  $(".about-city")
    .html(`Pula, Italian Pola, major port and industrial centre in western Croatia. It lies at the southern tip of Istria (peninsula) at the head of the Bay of Pula and has a large, almost landlocked harbour in which there is a naval base and the Uljanik shipyards.
    The town’s outstanding monument is the elliptical Roman amphitheatre completed about 80 CE and seating 23,000.
    <br><br>
     A temple of Augustus and a Byzantine basilica were extensively restored after the destructive conflict between Genoa and Venice. The Kaštel, on the hill at the centre of the old town, is a museum and was previously a fortress.
    `);

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // List Hotels Function

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/pula-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Resort del Mar <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 5 km from centre</li>
                            <li><span>&#9899;</span> Beach nearby</li>
                        </ul>
                        <p>Built in 2011, Resort del Mar is located on the seafront in Banjole, 4 km from Pula.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€80 pp / per night</h4>
                        </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/pula-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Splendid Resort <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2.5 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Set just steps away from the beach in the area of Zlatne Stijene, Splendid Resort offers self-catering accommodation and free WiFi access in public areas.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€40 pp / per night</h4>
                        </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/pula-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Modo <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2.7 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Located in Pula and surrounded with 3 beaches Valovine Beach, Stoja Beach and Zelenika Beach, Hotel Modo provides bright-coloured styled rooms with sea view.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€65 pp / per night</h4>
                        </div>
                </div>
`);
  }

  // Change Pop-Up content based on selected hotel

  // First Hotel Selection
  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, (hotelPosition = { lat: 44.82175, lng: 13.86542 }));
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/pula-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Resort del Mar</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€80 / pp per night</h5>
               
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Built in 2011, Resort del Mar is located on the seafront in Banjole, 
                        4 km from Pula. It offers bright, air-conditioned apartments with SAT TV,
                         as well as a gym, ice-cream bar, 2 restaurants and grocery shop.
                         <br>
                        <br>
                        Linen is changed weekly, while towels are changed every 4 days. The final cleaning is included in the rate.
                         Resort del Mar has a spacious lobby and outdoor terrace.
                        <br>
                        <br>
                        Free private parking is provided, while sun loungers and parasols are at your disposal by the pool. Massage treatments can be booked on site.
                        <br>
                         Local buses stop 200 m away and drive to Pula. The centre of Pula can be reached in 7 km, while Pula Airport is 13 km away.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, (hotelPosition = { lat: 44.84622, lng: 13.83566 }));
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/pula-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Splendid Resort</h2>

                <hr class="hr-large">
               <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€40 / pp per night</h5>
               
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Set just steps away from the beach in the area of Zlatne Stijene, Splendid Resort offers 
                        self-catering accommodation and free WiFi access in public areas. 
                        The resort offers an outdoor pool, a restaurant, table tennis facilities and a supermarket. The centre of Pula is 3 km away.
                        <br>
                        <br>
                        All apartments comes with a balcony, satellite TV, an equipped kitchenette and a dining table. 
                        Featuring a shower, 
                        the bathrooms also come with a hairdryer and towels. Some apartments have a sea view.
                        <br>
                        <br>
                        Lungomare Promenade is 300 m away, while the famous Roman Amphitheatre is about 4 km away. 
                        Several points of interest can be found in the town centre, such as the Arch of the Sergii, 
                        the Archaeological Museum of Istria and the Temple of Augustus.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, (hotelPosition = { lat: 44.86078, lng: 13.81487 }));
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/pula-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/pula-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Modo</h2>
                <hr class="hr-large">
               <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€40 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Located in Pula and surrounded with 3 beaches Valovine Beach, Stoja Beach and Zelenika Beach, 
                        Hotel Modo provides bright-coloured styled rooms with sea view. Featuring a restaurant, 
                        a lounge bar and a terrace, guests can unwind with a selection of fine dishes and refreshing drinks.
                        <br>
                        <br>
                        Guest rooms at the hotel are equipped with a seating area, a flat-screen satellite TV, a desk and a private bathroom including a bath, 
                        a hairdryer and a bidet. All guest rooms have free WiFi.
                        <br>
                        <br>
                        Hotel Modo offers a buffet breakfast. Speaking English and Croatian at the 24-hour front desk, 
                        staff will be happy to provide guests with practical guidance on the area.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-smoking-ban"></i> Non-Smoking Rooms</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: ["Resort del Mar", "Splendid Resort", "Hotel Modo"],
    price: [80, 40, 65],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Rovinj") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/rovinj-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/rovinj-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/rovinj-slide-3.png')";

  //change title and about info

  $(".city-title").text("Rovinj");
  $(".about-city")
    .html(`Situated on the west coast of Istria, Rovinj is one of the most popular and most developed tourist resorts in Croatia. The old town is built on the island, which was only connected with the mainland in the 18th century. Known as one of the most picturesque and romantic towns on Mediterranean, over the last few decades 
    Rovinj attracts a large number of tourists, most of them faithfully returning year after year.
    <br>
    <br>
    Rovinj manages to combine, in a very interesting way, its rich tradition with the modern times. As it is also an active fishing port, you can experience the atmosphere of a small fishing village, especially during the popular fishermen’s festivities or at one of the traditional taverns called Spacio (in the past, very popular among fishermen).`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 45.08102,
      lng: 13.64014,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/rovinj-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Lone <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 1.1 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Built in 2011, Resort del Mar is located on the seafront in Banjole, 4 km from Pula.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€80 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/rovinj-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Mobile Homes Polari <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 3.8 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Set just steps away from the beach in the area of Zlatne Stijene, Splendid Resort offers self-catering accommodation and free WiFi access in public areas.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€35 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/rovinj-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2> Family Hotel Amarin <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2.4 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Located in Pula and surrounded with 3 beaches Valovine Beach, Stoja Beach and Zelenika Beach, Hotel Modo provides bright-coloured styled rooms with sea view.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€55 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.07312, lng: 13.63927 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/rovinj-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Lone</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€80 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Set within the Golden Cape Natural Park, Hotel Lone offers a 
                        terrace and a wellness area. 
                        The hotel is 200 m away from the sea and a 15-minute stroll from Rovinj's centre.
                         <br>
                        <br>
                        Built in 2011, all modern design rooms at Hotel Lone have free Wi-Fi and a private balcony. 
                        They are equipped with all modern facilities, 
                        including flat-screen satellite TV and laptop safety box. Every room has air conditioning.
                        <br>
                        <br>
                        There is a wellness area with a spa pool, steam bath, sauna and massage room. 
                        The outdoor pool is shared with another hotel. 
                        It is surrounded by a spacious sunbathing area, and guests can also relax in a large indoor pool, which looks out to the lush garden.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.06132, lng: 13.67496 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/rovinj-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Mobile Homes Polari</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€35 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Mobile Homes Polari is set in a picturesque cove, 3 km south of Rovinj. 
                        It offers 2 km of beaches filled with all kinds of recreational facilities for an active holiday.
                        All mobile homes feature air conditioning, a furnished terrace, deck chairs and a flat-screen satellite TV. 
                        It offers a fully equipped kitchen with a dining area and 2 bathrooms.
                         <br>
                        <br>
                        Facilities consist of a large swimming pool and a children’s pool, restaurants, bars and a beach awarded with a Blue Flag. 
                        Other activities include tennis, beach volleyball, basketball, 
                        handball and table tennis. Polari also offers a children’s playground, mini club and rich entertainment program.
                        <br>
                        <br>
                        The ancient city of Pula is 35 km away. It is known for its amphitheatre which is 
                        one of the six largest surviving Roman arenas in the world.
                         Pula International Airport is 38 km from the Polari Mobile Homes.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.10244, lng: 13.62451 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/rovinj-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/rovinj-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Family Hotel Amarin</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€55 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Located on a green peninsula, only 50 m from the sea, Amarin Hotel features a Wellness and Spa zone. 
                        There are 4 restaurants with special menus for children. The outdoor swimming 
                        complex comprises 4 swimming pools for parents, children and babies. Rovinj Old Town can be reached in only 4 km.
                         <br>
                        <br>
                        The rooms and suites with clear lines and comfortable design feature air conditioning and a 
                        flat-screen TV with satellite channels. All rooms are fitted
                         with a private bathroom. For your comfort, you will find bath robes, slippers and free toiletries.
                        <br>
                        <br>
                        Guests can enjoy the culinary 
                        delights of the Marsea Restaurant 
                        and find some refreshment in the nearby Snack bar with a variety of products that will delight the young ones.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: ["Hotel Lone", "Mobile Homes Polari", "Family Hotel Amarin"],
    price: [80, 35, 55],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Porec") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/porec-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/porec-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/porec-slide-3.png')";

  //change title and about info

  $(".city-title").text("Porec");
  $(".about-city")
    .html(`Porec is the most popular holiday resort in Istria and is frequently named the top resort in Croatia by the Croatian National Tourist Office. There are over 100,000 beds available in the area, but hotels and other facilities are widely spread so the place never feels too crowded.

The main tourist areas are two bays south of the town, called Zelena (Green) and Plava (Blue) Laguna (lagoon).
<br>
<br>
They are almost like small towns, with several hotels in each, as well as camping facilities, a marina and shopping and entertainment areas. Most visitors stay in one of the two.

If you’re in the main part of town and fancy a bit of swimming and sunbathing, head to nearby Sveti Nikola island which you can reach by a regular boat (the journey is only a few minutes).`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 45.226643971952846,
      lng: 13.597270771129068,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/porec-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Parentium Plava Laguna <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2.8 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Built in 2014, Hotel Parentium Plava Laguna  is located on the seafront in Porec, 3 km from city centre.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€70 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/porec-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Porec <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 600m from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Set just steps away from the beach in the centre of Porec.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€30 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/porec-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2> Hotel Valamar Diamant  <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 1.6 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>This hotel is only a 5-minute walk away from the beach and features indoor and outdoor pools and lots of sports facilities.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€50 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.20390270475934, lng: 13.588455798818856 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/porec-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Parentium Plava Laguna</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€70 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Featuring a Spa Centre with 6 hot tubs, an indoor and 2 outdoor pools,
                        Hotel Laguna Parentium is set only 50 m from the beach in Poreč. 
                        The hotel offers 3 restaurants, along with a pool bar and a lounge bar. 
                        Free Wi-Fi is provided.
                         <br>
                        <br>
                        All rooms feature floor-to-ceiling windows and a balcony with 
                        seating area overlooking the park. They also feature an LCD 
                        satellite TV, minibar and a safe.                        
                        <br>
                        <br>
                        The Old Town of Poreč is located 5 km away. Pula Airport is at a distance of 60 km.
                        A secure parking is provided at an additional cost.                        </p>
                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.22467787961315, lng: 13.596946653316655 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/porec-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Porec</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€30 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Perfectly situated only 600 m from the beach with a marina and the 
                        historical old town, Hotel Porec offers the most comfortable
                         stay with a host of sports facilities. Free Wi-Fi is avaialble throughout.
                         <br>
                        <br>
                        Founded in Roman times, the city has many private palaces that house museums and 
                        galleries, and streets that were built almost 2.000 years ago. Some towers are still 
                        preserved, with a restaurant in the Pentagonal Tower and a pub in the Round Tower.                        <br>
                        <br>
                        Founded in Roman times, the city has many private 
                        palaces that house museums and galleries, and streets that were built 
                        almost 2.000 years ago. Some towers are still preserved, 
                        with a restaurant in the Pentagonal Tower and a pub in the Round Tower.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            
                            
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.21392, lng: 13.599272 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/porec-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/porec-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Family Hotel Amarin</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€50 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>You can explore the historical centre of Poreč, which is 1 km away, or stroll along the landscaped walking path by 
                        the Adriatic Sea. The hinterland of the Istrian peninsula features numerous historic towns.
                         <br>
                        <br>
                        Sports facilities include outdoor and covered tennis courts, a basketball hall,
                         an adventure and activity park as well as a water sports
                         centre. The numerous Spa and Wellness facilities can be enjoyed for an additional cost.
                        <br>
                        <br>
                        The air conditioned, bright rooms boast panoramic views of the sea or the forest
                        and feature a flat-screen satellite TV.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: [
      "Hotel Parentium Plava Laguna",
      "Hotel Porec",
      "Hotel Valamar Diamant",
    ],
    price: [70, 30, 50],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Dubrovnik") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/dubrovnik-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/dubrovnik-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/dubrovnik-slide-3.png')";

  //change title and about info

  $(".city-title").text("Dubrovnik");
  $(".about-city")
    .html(`<p>George Bernard Shaw was enchanted by this beautiful city, about which he said “those who seek paradise on Earth should come to Dubrovnik”, as well as, famously, describing it as “the pearl of the Adriatic”. It really is a stunning city with an amazing Old Town, which became a UNESCO World Heritage site in 1979. 
    <br>
    <br>
    Dubrovnik, in the extreme south of Croatia, is known as the Pearl of the Adriatic.
     A rich and powerful city state until 1806, the proud city once known as Ragusa has a population 
     of over 120,000. Structural damage suffered during the siege of 1991 and 1992, at the hands of the Yugoslav People's Army, has been repaired and visitors once again flock to this tranquil city, nestled between the Adriatic and Dinaric Alps. A wealth of sites lies within the walls of the pedestrian-only Old Town.</p>`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 42.64979626041334,
      lng: 18.09344635310566,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/dubrovnik-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Dubrovnik Palace <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 4.1 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Situated in the Lapad Peninsula, Hotel Dubrovnik Palace offers a beach and a scuba diving centre.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€95 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/dubrovnik-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Valamar Club Dubrovnik <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 4.2 from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>The family-friendly Valamar Club Dubrovnik Hotel on the lush Babin Kuk peninsula offers an easy access to the Old Town of Dubrovnik.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€40 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/dubrovnik-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Royal Neptun Hotel  <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 4.6 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Renovated in 2015, Royal Neptun Hotel Dubrovnik is a peaceful beach-front property on the Lapad Peninsula.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€60 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 42.6513, lng: 18.06103 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/dubrovnik-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Parentium Plava Laguna</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€70 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>All rooms now with sleek design and earthy 
                        colours, have a balcony and offer views of the Elaphite Islands
                         <br>
                        <br>
                        Free Wi-Fi, air conditioning and luxury toiletries are standard at the Dubrovnik Palace rooms. All are fitted with a flat-screen satellite TV and minibar.

                        There are 4 different restaurants, including a beach restaurant. 
                        Drinks and light snacks are served at the pool bar.                        
                        <br>
                        <br>
                        There is a local bus line to the Old Town every 20 minutes. The stop is opposite the hotel and the ride takes about 20 minutes.
                        Spa facilities include an indoor pool, hot tub and steam bath. There is also a fitness 
                        studio and a number of jogging paths can be found in the vicinity.
                        </p>

                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 42.66215120783241, lng: 18.065358841551028 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/dubrovnik-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Valamar Club Dubrovnik</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€40 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>The whole property is air-conditioned and the rooms offer all modern amenities. 
                        Free WiFi is available throughout the property.
                         <br>
                        <br>
                        Free Wi-Fi, air conditioning and luxury toiletries are standard at the Dubrovnik Palace rooms. All are fitted with a flat-screen satellite TV and minibar.

                        The large swimming pool, the multitude of sports courts, aquatic sports nearby at the beach and organised entertainment programmes 
                        for your kids provide for a pleasant vacation.                      
                        <br>
                        <br>
                        Because of its position on the Babin Kuk peninsula, the Valamar 
                        Club hotel is surrounded on 3 sides by the sea and beautiful 
                        pebbled and rocky beaches, including the famous Copacabana
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                         <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 42.65980313455148, lng: 18.05827587554569 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Royal Neptun Hotel</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€60 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Surrounded by fragrant pine trees, it boasts magnificent panoramic sea views. Most of the 
                        rooms feature a balcony and free WiFi access is available throughout the property.
                         <br>
                        <br>
                        Guests can enjoy the splendid outdoor swimming pools (a cliff-top pool and a 
                        pool for children) or simply jump into the sparkling Adriatic Sea.
                        <br>
                        All rooms at the Royal Neptun Hotel Dubrovnik are air-conditioned and feature a flat-screen TV with satellite channels. The modern, 
                        private bathrooms are all equipped with bathrobes, slippers and toiletries.
                        <br>
                        Spa treatments and rejuvenating massages are offered on site. Guests can relax in the sauna or choose to work out in the fitness centre.
                        Royal Neptun Hotel is a 10-minute drive away from Dubrovnik’s Old Town. A bus stop can be found at the hotel.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: [
      "Hotel Dubrovnik Palace",
      "Valamar Club Dubrovnik",
      "Royal Neptun Hotel",
    ],
    price: [95, 40, 60],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Split") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/split-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/split-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/split-slide-3.png')";

  //change title and about info

  $(".city-title").text("Split");
  $(".about-city").html(`<p>
    Croatia's second-largest city, Split (Spalato in Italian) is a great 
    place to see Dalmatian life as it’s really lived. Always buzzing, this exuberant city has just the right balance between tradition and modernity. Step inside Diocletian’s Palace (a Unesco World Heritage Site and one of the world’s most impressive Roman monuments) and you’ll see dozens of bars, restaurants and shops thriving amid the atmospheric old walls where Split
     has been humming along for thousands of years.</p>`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 43.512089793434356,
      lng: 16.44339587592428,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/split-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Radisson Blu Resort & Spa <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2.5 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Offering a beach area and an indoor pool, Radisson Blu Resort is 2.5 km from Split's UNESCO-protected Diocletian's Palace.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€85 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/split-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Pax <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 2 km from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Located in Split, 2.3 km from Duilovo Dog Beach, Hotel Pax provides accommodation with a restaurant, free private parking, a bar and a shared lounge.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€35 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/split-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Plaza Varos Split  <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 550 m from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Plaza Varos Split features a restaurant, bar, a shared lounge and garden in Split.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€55 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 43.50311468785213, lng: 16.470061011765516 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/split-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/split-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/split-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Radisson Blu Resort & Spa</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€85 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Most rooms include a balcony with views overlooking the islands of Brač and Šolta.
                         All rooms are fitted with air conditioning, flat-screen TVs and offer en-suite bathrooms with free toiletries. Room service is available.
                         <br>
                        <br>
                        The beach can be accessed via a flight of 100 stairs while the 
                        lavish hotel's spa offers various amenities such as saunas, massages and steam bath and Finnish sauna. There is also a gym at guests' 
                        disposal. Conference rooms are available and concierge service is offered at the Radisson Blu.                       
                        <br>
                        <br>
                        This is our guests' favourite part of Split, according to independent reviews.
                        </p>

                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 43.50345716972375, lng: 16.464232241467553 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/split-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/split-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/split-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Pax</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€35 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>With a garden, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. 
                        The accommodation offers a 24-hour front desk, a concierge service and organising tours for guests.
                         <br>
                        <br>
                        At the hotel, each room is fitted with a desk and a flat-screen TV. Guest rooms at Hotel Pax are equipped with a seating area.

                        Guests at the accommodation can enjoy a continental breakfast.                    
                        <br>
                        <br>
                        Diocletian's Palace is 2.4 km from the hotel, while Mladezi Park Stadium is 3.6 km away. 
                        The nearest airport is Split, 14 km 
                        from Hotel Pax, and the property offers a paid airport shuttle service.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                         <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 42.65980313455148, lng: 18.05827587554569 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/dubrovnik-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Plaza Varos Split</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€55 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Featuring family rooms, this property also provides guests with a terrace. The accommodation 
                        provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.
                         <br>
                        <br>
                        All units are equipped with air conditioning, a flat-screen TV with satellite channels,
                         a fridge, a kettle, a shower, a hairdryer and a desk. At the hotel each room 
                         includes a wardrobe and a private bathroom.
                        <br>
                        <br>
                        
                        Popular points of interest near the accommodation include Diocletian's Palace, Mladezi 
                        Park Stadium and Jezinac Beach. The nearest airport is Split Airport, 11 km from Plaza Varos Split.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: ["Radisson Blu Resort & Spa", "Plaza Varos Split", "Hotel Pax"],
    price: [85, 55, 35],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Zadar") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/zadar-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/zadar-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/zadar-slide-3.png')";

  //change title and about info

  $(".city-title").text("Zadar");
  $(".about-city").html(`<p>
  Zadar is a city monument, surrounded by historical ramparts, a treasury of 
  the archaeological and monumental riches of ancient and medieval times, 
  Renaissance and many contemporary architectural achievements such as the first Sea Organ in the world.
The city of Zadar is an easily reached destination by land, sea and air. 
It has a good traffic infrastructure through which it is directly connected to other bigger 
cities of the Republic of Croatia and Europe, with extraordinary accommodation and contemporary service of numerous marinas. 
Whichever way you want to reach Zadar, the natural beauty of the landscape will not leave you equanimous.</p>`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 44.10645302043896,
      lng: 15.241479484019788,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/zadar-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Idassa Atrium  <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 150 m from centre</li>
                            <li><span>&#9899;</span> 950 m to beach</li>
                        </ul>
                        <p>Located in Zadar and with Kolovare Beach reachable within less than 1 km.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€95 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/zadar-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2> Apartments Benic <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 6.5 km from centre</li>
                            <li><span>&#9899;</span> 350 m from beach</li>
                        </ul>
                        <p>Enjoying a quiet location 500 m from the beach, Apartments Benic is set 1.8 km from the historic centre of Zadar.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€30 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/zadar-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Falkensteiner Family Hotel Diadora <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 550 m from centre</li>
                            <li><span>&#9899;</span> Beachfront</li>
                        </ul>
                        <p>Situated on Punta Skala peninsula in Petrčane, Falkensteiner Family Hotel Diadora boasts a seasonal outdoor swimming pool and a children's water world with an indoor pool.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€55 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 43.50311468785213, lng: 16.470061011765516 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zadar-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Radisson Blu Resort & Spa</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€85 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Most rooms include a balcony with views overlooking the islands of Brač and Šolta.
                         All rooms are fitted with air conditioning, flat-screen TVs and offer en-suite bathrooms with free toiletries. Room service is available.
                         <br>
                        <br>
                        The beach can be accessed via a flight of 100 stairs while the 
                        lavish hotel's spa offers various amenities such as saunas, massages and steam bath and Finnish sauna. There is also a gym at guests' 
                        disposal. Conference rooms are available and concierge service is offered at the Radisson Blu.                       
                        <br>
                        <br>
                        This is our guests' favourite part of Split, according to independent reviews.
                        </p>

                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 43.50345716972375, lng: 16.464232241467553 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zadar-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Pax</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€35 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>With a garden, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. 
                        The accommodation offers a 24-hour front desk, a concierge service and organising tours for guests.
                         <br>
                        <br>
                        At the hotel, each room is fitted with a desk and a flat-screen TV. Guest rooms at Hotel Pax are equipped with a seating area.

                        Guests at the accommodation can enjoy a continental breakfast.                    
                        <br>
                        <br>
                        Diocletian's Palace is 2.4 km from the hotel, while Mladezi Park Stadium is 3.6 km away. 
                        The nearest airport is Split, 14 km 
                        from Hotel Pax, and the property offers a paid airport shuttle service.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                         <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 42.65980313455148, lng: 18.05827587554569 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zadar-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zadar-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Plaza Varos Split</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€55 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Featuring family rooms, this property also provides guests with a terrace. The accommodation 
                        provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.
                         <br>
                        <br>
                        All units are equipped with air conditioning, a flat-screen TV with satellite channels,
                         a fridge, a kettle, a shower, a hairdryer and a desk. At the hotel each room 
                         includes a wardrobe and a private bathroom.
                        <br>
                        <br>
                        
                        Popular points of interest near the accommodation include Diocletian's Palace, Mladezi 
                        Park Stadium and Jezinac Beach. The nearest airport is Split Airport, 11 km from Plaza Varos Split.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: [
      "Idassa Atrium",
      "Apartments Benic",
      "Falkensteiner Family Hotel Diadora",
    ],
    price: [95, 30, 55],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Zagreb") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/zagreb-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/zagreb-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/zagreb-slide-3.png')";

  //change title and about info

  $(".city-title").text("Zagreb");
  $(".about-city").html(`<p>
  Zagreb is made for strolling. Wander through 
  the Upper Town's red-roof and cobblestone glory, peppered with church spires.
   Crane your neck to see the domes and ornate upper-floor frippery of the Lower Town's mash-up 
   of secessionist, neo-baroque and art deco buildings. Search out the grittier pockets of town where ugly-bland concrete walls 
  have been transformed into colourful murals by local street artists. This city rewards those on foot.</p>`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 45.81300065757794,
      lng: 15.976429755309525,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/zagreb-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Esplanade Zagreb Hotel <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 900 m from centre</li>
                        </ul>
                        <p>Situated in Zagreb city centre, right next to the Zagreb Main Railway Station, 5-star Esplanade Zagreb Hotel offers a fitness centre and sauna.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€100 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/zagreb-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Jägerhorn <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 300 m from centre</li>
                        </ul>
                        <p>Situated between the main pedestrian street and Zagreb's old town close to Ban Jelacic Square.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€45 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/zagreb-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel International <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 1.6 km from centre</li>
                        </ul>
                        <p>Boasting a prime location in Zagreb’s business centre, Hotel International is within walking distance to the old town.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€70 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.80541681420194, lng: 15.976019469068206 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zagreb-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Esplanade Zagreb Hotel</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€100 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Hotel offers a fitness centre and sauna. Free WiFi access is featured 
                        throughout the hotel. Guests can enjoy a meal at the hotel 
                        restaurant's terrace or have a drink served by the award-winning cocktail bartenders.
                        <br>
                        <br>
                        Opened in 1925, Esplanade Hotel boasts one of the most prominent buildings in city. Its art-noveau style rooms offer satellite TV and a
                         minibar, while the marble bathrooms include a bathtub and shower and complimentary L’Occitane cosmetics.                       
                        <br>
                        <br>
                        Zagreb Airport is 15 km away. Car hire can be arranged by the hotel.
                        </p>

                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-paw"></i> Pets Allowed</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.813209486387024, lng: 15.973734472553136 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zagreb-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Jägerhorn </h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€45 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>This hotel was refurbished in 2011. Founded in 1827, Hotel Jagerhorn is the city's oldest standing hotel.

                        The elegantly equipped rooms provide free Wi-Fi internet access. Free secure parking is located nearby.
                         <br>
                        <br>
                        Guests can enjoy a quiet drink by the fountain, or enjoy the town view from the summer terrace. Ban Jelačić Square is just a 3-minute walk away.

                        This is our guests' favourite part of Zagreb, according to independent reviews.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                         <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.799147300406254, lng: 15.974055696096023 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/zagreb-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/zagreb-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel International</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€70 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>The hotel features several modern conference and banquet area. Free use of the fitness centre and the sauna is available to guests as well as free WiFi.

                        The spacious air-conditioned rooms come with a flat-screen satellite TV and a minibar.
                         <br>
                        <br>
                        Some units include a tea and coffee maker. The private bathroom is equipped with a bath and comes with a hairdryer and free toiletries.

                        Guest can enjoy the modern lounge bar, taste delicious local and international specialities in the restaurant and relax after a long day of work or sight-seeing.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-spa"></i> Spa & Welness Centre</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: ["Esplanade Zagreb Hotel", "Hotel Jägerhorn", "Hotel International"],
    price: [100, 45, 70],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
} else if (readURL === "Karlovac") {
  //load images
  imageArray[0].style.backgroundImage =
    "url('assets/images/karlovac-slide-1.png')";
  imageArray[1].style.backgroundImage =
    "url('assets/images/karlovac-slide-2.png')";
  imageArray[2].style.backgroundImage =
    "url('assets/images/karlovac-slide-3.png')";

  //change title and about info

  $(".city-title").text("Karlovac");
  $(".about-city").html(`<p>
  Located in central Croatia at the meeting point between the Croatian lowlands, Croatian highlands,  Pokupje and Kordun. Karlovac is framed by four rivers - Kupa, Korana, Dobra and Mrežnica. Since it is located at the narrowest part of Croatia, it is only 50 kilometres away from Slovenia and from Bosnia and Herzegovina. As a city, Karlovac has an important traffic and economic significance.
 
The city of Karlovac is one of rare cities that know the exact date of their creation. 
For Karlovac it is July 13, 1579, when it was founded and named by its founder, 
archduke Karl von Habsburg. 
<br>
<br>
It was marked by the beginning of construction of 
the Karlovac border military fort built for the purpose of defence against the
 Turks. Every year on July 13, the city of Karlovac celebrates its birthday,
  which is celebrated by the birthday ball on Trg bana Josipa Jelačića square, and with the celebration session of the City council and awarding of public recognition awards.</p>`);

  //Show City On The Map
  initMap(
    (cityPosition = {
      lat: 45.4883978545671,
      lng: 15.54822572933611,
    })
  );

  // Show Relevant Hotels

  let hotelOne = $(".hotel-box:eq(0)");
  let hotelTwo = $(".hotel-box:eq(1)");
  let hotelThree = $(".hotel-box:eq(2)");

  listHotels();
  $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

  // Filtering System

  $(".filter-options li:eq(0)").click(function (listHotels) {
    $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  $(".filter-options li:eq(1)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: Low to High")
      .css("width", "auto");
    $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
  });

  $(".filter-options li:eq(2)").click(function (listHotels) {
    $(".dropdown-toggle")
      .html("Sort By: Price: High to Low")
      .css("width", "auto");
    $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
  });

  // Display Hotel Information

  function listHotels() {
    $(".hotel-box:eq(0)").html(`

 <div class="hotel-box_content">
                    <img src="assets/images/hotels/karlovac-hotel-1.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Hotel Europa <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 1.7 km from centre</li>
                        </ul>
                        <p>Hotel Europa is situated next to the motorway in Karlovac a 30-minute drive to Zagreb.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€60 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(1)").html(`
<div class="hotel-box_content">
                    <img src="assets/images/hotels/karlovac-hotel-2.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Motel Kod Bakija <i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 5 km from centre</li>
                        </ul>
                        <p>Conveniently situated next to the main tourist road D1 in Jelasi, 5 km from Karlovac.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€20 pp / per night</h4>
                    </div>
                </div>
`);
    $(".hotel-box:eq(2)").html(`

<div class="hotel-box_content">
                    <img src="assets/images/hotels/karlovac-hotel-3.png" alt="hotel image">
                    <div class="hotel-box_description">
                        <h2>Apartmani Nova <i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h2>
                        <ul>
                            <li><span>&#9899;</span> 1.6 km from centre</li>
                        </ul>
                        <p>Apartmani Nova is located in Karlovac. Featuring family rooms, this property also provides guests with a terrace.</p>

                        <button class="cta-see-more">See More</button><button class="book-now">Book Now</button>
                        <h4>€35 pp / per night</h4>                   
                        </div>
                </div>
`);
  }

  // Change Hotel Pop-Up content based on selected hotel

  // First Hotel Selection

  $(".hotel-box:eq(0) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.51212411909474, lng: 15.546807727743541 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/karlovac-hotel-1-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-1-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-1-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Hotel Europa</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€60 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>It offers modern rooms with air conditioning and access to the sauna, available at a surcharge.

                    The hotel's restaurant serves international cuisine. Guests get a complimentary fruit basket and a 
                        bottle of water in their room.
                        <br>
                        <br>
                        Hotel Europa is a great starting point to go hunting or rafting. Parking is available in front of the property.
                        </p>

                        <h4>Hotel Facilities</h4>
                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                            <li><i class="fas fa-cocktail"></i> Bar</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Second Hotel Selection

  $(".hotel-box:eq(1) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.813209486387024, lng: 15.973734472553136 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/karlovac-hotel-2-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-2-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-2-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Motel Kod Bakija </h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€20 / pp per night</h5>
             
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>Motel Kod Bakija offers a restaurant serving local and international dishes as well as Bosnian specialities.

                        The area is perfect for cycling, walking and enjoying the lush nature. There are 4 rivers in 
                        the vicinity, so you can go swimming in pure water, rowing, rafting as well as fishing.
                         <br>
                        <br>
                        Venture out and explore castles and other cultural and historical monuments - only a few minutes from the property there is an open air War Museum.
                        </p>

                        <h4>Hotel Facilities</h4>

                        <ul>
                         <li><i class="fas fa-cocktail"></i> Bar</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Third Hotel Selection

  $(".hotel-box:eq(2) .cta-see-more").click(function () {
    // Show Hotel On Map
    initMap(cityPosition, { lat: 45.476397879836384, lng: 15.557906625581811 });
    launchHotelpopup();

    // Load Slideshow Hotel Images
    $(".loadImages").append(`
    <div class="carousel-item active">
                            <img src="assets/images/hotels/karlovac-hotel-3-1.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-3-2.png" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/hotels/karlovac-hotel-3-3.png" alt="...">
                        </div>
`);

    //Show Main Hotel Info

    $(".hotel-intro").append(`
        <h2>Apartmani Nova</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€35 / pp per night</h5>
              
    `);

    // Show Hotel About Info

    $(".hotel-content").append(`
    
                <div class="hotel-content_box-two">
                    <h3>About Hotel</h3>
                    <div class="about-hotel">

                        <p>There is a barbecue and guests can make use of free WiFi and free private parking.

                        Guest rooms are equipped with air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a shower, a hairdryer and a desk. 
                         <br>
                        <br>
                        Apartmani Nova offers 4-star accommodation with a hot tub. Guests at the accommodation will be able to enjoy activities in and around Karlovac, like cycling and fishing.                        
                        </p>
                        <h4>Hotel Facilities</h4>

                        <ul>
                            <li><i class="fas fa-swimming-pool"></i> Swimming Pool</li>
                            <li><i class="fas fa-parking"></i> Free Parking</li>
                            <li><i class="fas fa-wifi"></i> Free WI-FI</li>
                        </ul>
                    </div>
                </div>
    `);

    closeHotelPopup();
  });

  // Show Booking Pop-up based on selected hotel

  //Store Hotel names and prices

  let hotelInfo = {
    name: ["Hotel Europa", "Motel Kod Bakija", "Apartmani Nova"],
    price: [60, 20, 35],
  };

  //Add event listener to each hotel booking button

  $(".hotel-box:eq(0) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[0]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[0]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[0]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(1) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[1]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[1]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[1]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });

  $(".hotel-box:eq(2) .book-now").click(function () {
    launchBookingPopup();

    //Show hotel name
    $(".hotel-name").text(hotelInfo.name[2]);

    //Calculate total based on selected passangers
    $(".calcValue").text(" €" + hotelInfo.price[2]);

    $(".selection").click(function () {
      let adultPassangers = parseInt($("#adult").val());
      let childPassangers = parseInt($("#child").val());

      $(".calcValue").text(
        ` €${(adultPassangers + childPassangers / 2) * hotelInfo.price[2]}`
      );

      // Show Number of adults and children selected
      $(".no-adults").html(`(${adultPassangers})`);
      $(".no-children").html(`(${childPassangers})`);
    });

    closeBookingPopup();
  });
}
