// Display Selected City Content

// Retrive City Name From URL

var readURL = location.toString();
readURL = readURL.substring(readURL.indexOf("?"));
readURL = readURL.split("?").pop();
readURL = readURL.charAt(0).toUpperCase() + readURL.slice(1);


// Populate bread crumbs link with city name  

$(".city-name").text(readURL);

//Launch/Close Hotel Pop-Up when click See More

function launchHotelpopup() {
    if ($(window).width() < 1200) {
        $("#hotel-listing").css("visibility", "hidden");
        $("#hotel-offering").css("width", "95%");
    }
    $(".hotel-offering_popup").fadeIn(300);
};


function closeHotelPopup() {
    $(".popup-exit").click(function () {
        $("#hotel-offering").css("width", "85%");
        $(".hotel-offering_popup").fadeOut(300);
        $(".hotel-content_box-two").remove();
        $(".hotel-intro, .loadImages").html("");
        $("#hotel-listing").css("visibility", "visible");

    })


};


//Launch Close Booking Pop-Up

function launchBookingPopup() {
    $(".booking-popup").fadeIn(300);
    $("#adult").val(1);
    $("#child").val(0);
    $(".no-adults").html(`(1)`);
    $(".no-children").html(`(0)`);
}

function closeBookingPopup() {
    $(".popup-exit-black").click(function () {
        $(".booking-popup").fadeOut(300);
    })

}


// Set Class to handle default location
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
        map
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
    initMap(cityPosition = {
        lat: 44.866623,
        lng: 13.849579,
    });

    //change title and about info

    $(".city-title").text("Pula");
    $(".about-city").text("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, in sed veniam delectus veritatis consequuntur quam itaque, doloremque accusantium quidem dicta aliquid mollitia tenetur omnis deleniti, alias voluptates dolor consectetur.Ut officiis assumenda natus sint, obcaecati adipisci dolor, laborum eveniet rerum in eius possimus voluptates repellendus eos!");



    // Show Relevant Hotels

    let hotelOne = $(".hotel-box:eq(0)")
    let hotelTwo = $(".hotel-box:eq(1)")
    let hotelThree = $(".hotel-box:eq(2)")

    listHotels();
    $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);

    // Filtering System

    $(".filter-options li:eq(0)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto")
        $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
    });

    $(".filter-options li:eq(1)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: Low to High").css("width", "auto")
        $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
    });

    $(".filter-options li:eq(2)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: High to Low").css("width", "auto")
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
        initMap(cityPosition, hotelPosition = { lat: 44.82175, lng: 13.86542 });
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
               
    `)

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
    `)

        closeHotelPopup();

    });


    // Second Hotel Selection

    $(".hotel-box:eq(1) .cta-see-more").click(function () {


        // Show Hotel On Map
        initMap(cityPosition, hotelPosition = { lat: 44.84622, lng: 13.83566 });
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
               
    `)

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
    `)

        closeHotelPopup();

    });



    // Third Hotel Selection

    $(".hotel-box:eq(2) .cta-see-more").click(function () {


        // Show Hotel On Map
        initMap(cityPosition, hotelPosition = { lat: 44.86078, lng: 13.81487 });
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
              
    `)

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
    `)

        closeHotelPopup();

    });



    // Show Booking Pop-up based on selected hotel

    //Store Hotel names and prices

    let hotelInfo = {
        name: ["Resort del Mar", "Splendid Resort", "Hotel Modo"],
        price: [80, 40, 65]
    }

    //Add event listener to each hotel booking button

    $(".hotel-box:eq(0) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[0]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[0]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[0]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


     $(".hotel-box:eq(1) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[1]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[1]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[1]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


        $(".hotel-box:eq(2) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[2]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[2]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[2]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });



} else if (readURL === "Rovinj") {

    //load images
    imageArray[0].style.backgroundImage = "url('assets/images/rovinj-slide-1.png')";
    imageArray[1].style.backgroundImage = "url('assets/images/rovinj-slide-2.png')";
    imageArray[2].style.backgroundImage = "url('assets/images/rovinj-slide-3.png')";

    //change title and about info

    $(".city-title").text("Rovinj");
    $(".about-city").text("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, in sed veniam delectus veritatis consequuntur quam itaque, doloremque accusantium quidem dicta aliquid mollitia tenetur omnis deleniti, alias voluptates dolor consectetur.Ut officiis assumenda natus sint, obcaecati adipisci dolor, laborum eveniet rerum in eius possimus voluptates repellendus eos!");


    //Show City On The Map
    initMap(cityPosition = {
        lat: 45.08102,
        lng: 13.64014,
    });


    // Show Relevant Hotels

    let hotelOne = $(".hotel-box:eq(0)")
    let hotelTwo = $(".hotel-box:eq(1)")
    let hotelThree = $(".hotel-box:eq(2)")


    listHotels();
    $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);


    // Filtering System

    $(".filter-options li:eq(0)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto")
        $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
    });

    $(".filter-options li:eq(1)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: Low to High").css("width", "auto")
        $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
    });

    $(".filter-options li:eq(2)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: High to Low").css("width", "auto")
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
              
    `)

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
    `)

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
        <h2>Mobile Homes Polari</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€35 / pp per night</h5>
             
    `)

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
    `)

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
        <h2>Family Hotel Amarin</h2>

                <hr class="hr-large">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i>
                <h5>€55 / pp per night</h5>
              
    `)

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
    `)

        closeHotelPopup();

    });



    
    // Show Booking Pop-up based on selected hotel

    //Store Hotel names and prices

    let hotelInfo = {
        name: ["Hotel Lone", "Mobile Homes Polari", "Family Hotel Amarin"],
        price: [80, 35, 55]
    }

    //Add event listener to each hotel booking button

    $(".hotel-box:eq(0) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[0]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[0]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[0]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


     $(".hotel-box:eq(1) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[1]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[1]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[1]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


        $(".hotel-box:eq(2) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[2]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[2]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[2]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });






} else if (readURL === "Porec") {


   //load images
    imageArray[0].style.backgroundImage = "url('assets/images/porec-slide-1.png')";
    imageArray[1].style.backgroundImage = "url('assets/images/porec-slide-2.png')";
    imageArray[2].style.backgroundImage = "url('assets/images/porec-slide-3.png')";

    //change title and about info

    $(".city-title").text("Porec");
    $(".about-city").text(`Porec is the most popular holiday resort in Istria and is frequently named the top resort in Croatia by the Croatian National Tourist Office. There are over 100,000 beds available in the area, but hotels and other facilities are widely spread so the place never feels too crowded.

The main tourist areas are two bays south of the town, called Zelena (Green) and Plava (Blue) Laguna (lagoon). They are almost like small towns, with several hotels in each, as well as camping facilities, a marina and shopping and entertainment areas. Most visitors stay in one of the two.

If you’re in the main part of town and fancy a bit of swimming and sunbathing, head to nearby Sveti Nikola island which you can reach by a regular boat (the journey is only a few minutes).`);


    //Show City On The Map
    initMap(cityPosition = {
        lat: 45.226643971952846,
        lng: 13.597270771129068,
    });

    

    // Show Relevant Hotels

    let hotelOne = $(".hotel-box:eq(0)")
    let hotelTwo = $(".hotel-box:eq(1)")
    let hotelThree = $(".hotel-box:eq(2)")


    listHotels();
    $("#hotel-listing").append(hotelOne, hotelTwo, hotelThree);


    // Filtering System

    $(".filter-options li:eq(0)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Stars").css("width", "auto")
        $("#hotel-listing").append(hotelOne, hotelThree, hotelTwo);
    });

    $(".filter-options li:eq(1)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: Low to High").css("width", "auto")
        $("#hotel-listing").append(hotelTwo, hotelThree, hotelOne);
    });

    $(".filter-options li:eq(2)").click(function (listHotels) {
        $(".dropdown-toggle").html("Sort By: Price: High to Low").css("width", "auto")
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
              
    `)

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
    `)

        closeHotelPopup();

    });



    // Second Hotel Selection

    $(".hotel-box:eq(1) .cta-see-more").click(function () {


        // Show Hotel On Map
        initMap(cityPosition, { lat:  45.22467787961315, lng: 13.596946653316655});
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
             
    `)

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
    `)

        closeHotelPopup();

    });



    // Third Hotel Selection

    $(".hotel-box:eq(2) .cta-see-more").click(function () {


        // Show Hotel On Map
        initMap(cityPosition, { lat: 45.21392, lng: 13.599272});
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
              
    `)

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
    `)

        closeHotelPopup();

    });



    
    // Show Booking Pop-up based on selected hotel

    //Store Hotel names and prices

    let hotelInfo = {
        name: ["Hotel Parentium Plava Laguna", "Hotel Porec", "Hotel Valamar Diamant"],
        price: [70, 30, 50]
    }

    //Add event listener to each hotel booking button

    $(".hotel-box:eq(0) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[0]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[0]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[0]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


     $(".hotel-box:eq(1) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[1]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[1]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[1]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });


        $(".hotel-box:eq(2) .book-now").click(function () {

        launchBookingPopup();

        //Show hotel name
        $(".hotel-name").text(hotelInfo.name[2]);

        //Calculate total based on selected passangers
        $(".calcValue").text( " €" + hotelInfo.price[2]);

        $(".selection").click(function () {
            let adultPassangers = parseInt($("#adult").val());
            let childPassangers = parseInt($("#child").val());

            $(".calcValue").text( ` €${(adultPassangers + (childPassangers / 2)) * hotelInfo.price[2]}`);
            
        // Show Number of adults and children selected
            $(".no-adults").html(`(${adultPassangers})`);
            $(".no-children").html(`(${childPassangers})`);

        });

        closeBookingPopup()
    });



}




