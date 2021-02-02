// Retrieve search result value

var readURL = location.toString();
var submittedValue = readURL.substring(readURL.indexOf("="));
var searchResult = submittedValue.split("=").pop();
searchResult = searchResult.replace("+", " ");
searchResult = searchResult.replace("+", " ").toLowerCase();

let searchItemBox = $(".search-result");

// Display search result in breadcrumbs section

function displaySearchResultTerm() {

    if (searchResult === "") {
        $(".result").html("");
    } else {
        $(".result").html("'" + searchResult + "'");

    }

}


// Check what term was used for search

if (searchResult === "food") {
    displaySearchResultTerm();

    // Display Food Result

    $(".search-result_title").text("Most Popular Food In Croatia")

    var food = {
        choices: [["Black risotto", "assets/images/search-result-images/food-img-1.png", "Known locally as crni rižot, this is made with cuttlefish or squid, olive oil, garlic, red wine and squid ink, which gives an intense seafood flavour and black colour. Popular all along Croatia’s coastline, this dish will turn your mouth and teeth black – but it’s worth it."],
        ["Boškarin", "assets/images/search-result-images/food-img-2.png", "The white-grey, long-horned Istrian oxen are a gourmet delicacy. Boškarin is served at top restaurants and konobas (taverns) in a variety of ways, including as carpaccio; in savoury sauce with pasta or gnocchi; as salami or steak; and boškarin tail soup."],
        ["Brodetto", "assets/images/search-result-images/food-img-3.png", "Also called brudet, this fisherman’s stew hails from from Italy’s Marche region. Traditionally, fishermen cooked it over an open fire using the catch of the day. They would add ample vinegar to the pot to preserve the stew for a couple of days. Like Italians, coastal Croatians use a tomato base in this dish."],
        ["Buzara", "assets/images/search-result-images/food-img-4.png", "This simple dish of mussels in a wine broth with garlic and breadcrumbs is popular all along the Croatian coast. Buzara means ‘stew’, and the preparation is similar to the way the French make moules marinière."],
        ["Fritule", "assets/images/search-result-images/food-img-5.png", "Commonly found on the Adriatic coast, these donut-like fried pastries vary from region to region – egg yolks, raisins, grated lemon or orange rinds, and even rakija or rum can go into the mixture. Traditionally served during the holidays, these are popular and highly addictive, so you can usually find them year round."],
        ["Peka", "assets/images/search-result-images/food-img-6.png", "Popular throughout Croatia, this tender meat & vegetable dish is also called ispod čripnje (under the bell) – literally food that is cooked under a terracotta or iron lid over burning embers. Peka can include octopus, lamb, veal or chicken, and is often accompanied by potatoes."]]
    }


    food.choices.forEach(function (item) {
        searchItemBox.append(`<div class="search-result_item">
    <img src="${item[1]}" />
     <h1>${item[0]}</h1>
    <p>${item[2]}</p>
    </div>`);

    });



} else if (searchResult === "culture") {
    displaySearchResultTerm();

    // Display Croatian Cultural Objects

    $(".search-result_title").text("Croatian Culture")

    var statutes = {
        choices: [["Pula Arena", "assets/images/search-result-images/pula-arena.png", "This famous monument in Croatia also being among the six largest surviving Roman arenas in the World. Bloodshed with spectacular gladiator fighting being one of the most famous purposes of the amphitheater."],
        ["Ban Jelačić Square", "assets/images/search-result-images/ban-square.png", "Named after ban Josip Jelačić and being the central square of Zagreb. This best monument in Croatia is located below Zagreb’s old city cores Gradec and Kaptol. The square features a large statue of Josip Jelačić. With his sword out riding a horse that adds a certain charm to the square in general."],
        ["Trakoscan Castle" , "assets/images/search-result-images/castle.png", "This historic beauty of this Trakoscan Castle looks like something from a fairy tale. Being built in the 13th century, the castle is located in the northern region of Croatia. Between from Ptuj to Bednja, it was meant as an observation fortress to monitor the valley." ],
        ["Dubrovnik’s City Walls", "assets/images/search-result-images/walls.png", "After the city gained its full independence from Venetian suzerainty, the present shape of the walls was defined in the 14th century but the peak of its construction lasted from the beginning of the 15th century until the latter half of the 16th century."]

        ]

    }


    statutes.choices.forEach(function (item) {
        searchItemBox.append(`<div class="search-result_item">
    <img src="${item[1]}" />
     <h1>${item[0]}</h1>
    <p>${item[2]}</p>
    </div>`);

    });



}

else if (searchResult === "pula") {
    window.location.replace("/city.html?pula");

} else if (searchResult === "rovinj") {
    window.location.replace("/city.html?rovinj");

}  else if (searchResult === "porec") {
    window.location.replace("/city.html?porec");

}  else if (searchResult === "dubrovnik") {
    window.location.replace("/city.html?dubrovnik");

}   else if (searchResult === "split") {
    window.location.replace("/city.html?split");

}  else if (searchResult === "zadar") {
    window.location.replace("/city.html?zadar");

} else if (searchResult === "zagreb") {
    window.location.replace("/city.html?zagreb");

}  else if (searchResult === "karlovac") {
    window.location.replace("/city.html?karlovac");

} else {
    displaySearchResultTerm();
    $(".no-result-found-strip").css("display", "block");
    $(".hide").css("display", "none");

}


