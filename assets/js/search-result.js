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

        



food.choices.forEach(function(item) {
    console.log(item);
    searchItemBox.append(`<div class="search-result_item">
    <img src="${item[1]}" />
     <h1>${item[0]}</h1>
    <p>${item[2]}</p>
    </div>`);
    
});



} else if (searchResult === "places to visit") {
    displaySearchResultTerm();


    // Display Places to visit Result

} else if(searchResult === "music") {
 displaySearchResultTerm();


    // Display Music Result

    


} else {

    displaySearchResultTerm();
    $(".no-result-found-strip").css("display", "block");
    $(".hide").css("display", "none");

}


