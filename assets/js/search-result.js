// Retrive search result value

var readURL = location.toString();
var submittedValue = readURL.substring(readURL.indexOf("="));
var searchResult = submittedValue.split("=").pop();
searchResult = searchResult.replace("+", " ");
searchResult = searchResult.replace("+", " ").toLowerCase();



// Display search result in breadcrumbs section

function displaySearchResult() {

        if(searchResult === "") {
            $(".result").html("");
        }else {
              $(".result").html("'" + searchResult + "'");

        }
    
}


// Check what term was used for search

if (searchResult === "food") {
      displaySearchResult();



}else if (searchResult === "places to stay") {   
     displaySearchResult();
    
}else {

    displaySearchResult();
    $(".no-result-found").css("display", "block");
}
