var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//generate a new random number between 0 and 3,
function nextSequence() {
    
    var randomNumber = Math.floor(Math.random() * 4);
    
    //to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    // Add the new randomChosenColour to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
}
