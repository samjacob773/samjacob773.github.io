$( document).ready(function() {
// An array of cartoons. New cartoons will be pushed into this array.
let topic = ["arthur", "bobs burgers", "daria", "flintstones", "muppet babies", "schoolhouse rock", "scooby doo", "south park"];
// function that displays all of the  gif buttons
function displayGifButtons() {
$("#gifButtonsView").empty();
for (let i = 0; i < topic.length; i++) {
    let gifButton = $("<button>");
    gifButton.addClass("cartoon");
    gifButton.addClass("btn btn-primary")
    gifButton.attr("data-name", topic[i]);
    gifButton.text(topic[i]);
    $("#gifButtonsView").append(gifButton);
}
}
//function to add a new action button
function addNewButton() {
$("#addGif").on("click", function() {
    let cartoon = $("#topicInput").val().trim();
    if (cartoon == ""){
//NO BLANK BUTTONS!
        return false;  
    }
topic.push(cartoon);
displayGifButtons();
return false;
});
}
//function to remove last topic button
function removeLastButton() {
    $("removeGif").on("click", function() {
    topic.pop(cartoon);
    displayGifButtons();
    return false;
});
}
// gif display function
function displayGifs() {
    let cartoon = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=hDADvBQd0XtXhXHejAQ5s07d6YWXYReV&limit=10";
    $.ajax({
        url:  queryURL,
        method: 'GET'
    })
    .done(function(response) {
//console test to make sure something returns
$("#gifsView").empty();
// erasing anything in this div id so that it doesnt keep any from the previous click
//show results of gifs
let results = response.data;
if (results == ""){
alert("There are no gifs in the GIPHY database associated with this search term.");
}
for (let i = 0; i<results.length; i++) {
// return gifs in a div
let gifDiv = $("<div1>");
// pull gif rating
let gifRating = $("<p>").text("Rating " + results[i].rating);
gifDiv.append(gifRating);
// pull gif itself
let gifImage = $("<img>");
gifImage.attr("src", results[i].images.fixed_height_small_still.url);
//paused images
gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
//animated images
gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
//images put in already paused
gifImage.attr("data-state", "still");
gifImage.addClass("image");
gifDiv.append(gifImage);
// add a new div to the existing divs
$("#gifsView").prepend(gifDiv);
}
});
}
//list of cartoon gifs already created
displayGifButtons();
addNewButton();
removeLastButton();
//EVENT LISTENERS!
$(document).on("click", ".cartoon", displayGifs);
$(document).on("click", ".image", function() {
    console.log("here");
    let state = $(this).attr('data-state');
    console.log($(this).data('animate'));
    if (state == 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }   
});
});

    
