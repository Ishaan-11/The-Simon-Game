var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

//detect when any of the buttons are clicked
$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // play the sound for the button colour selected
    playSound(userChosenColour);
});

//generate a new random number between 0 and 3,
function nextSequence() {
    
    var randomNumber = Math.floor(Math.random() * 4);
    //to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    // Add the new randomChosenColour to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    //select the button with the same id as the randomChosenColour and animate a flash 
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // play the sound for the button colour selected
    playSound(randomChosenColour);

}

// play the sound for the button colour selected
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
