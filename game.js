var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

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
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
