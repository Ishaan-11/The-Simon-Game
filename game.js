var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//to keep track of whether if the game has started or not
var started = false;
var level = 0;

// when a keyboard key has been pressed call nextSequence().
$(document).on("keydown",function() {
    if(!started) {
        //when the game has started, change h1 to "Level 0"
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//detect when any of the buttons are clicked
$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    // play the sound for the button colour selected
    playSound(userChosenColour);
    //animate button on click
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        console.log('success');
        if(userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    } else {
        console.log('failed');
    }
    
}

//generate a new random number between 0 and 3,
function nextSequence() {

    // reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    //increase the level by 1 every time nextSequence() is called
    level++;
    //update the h1 with this change in the value of level
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    //to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    // Add the new randomChosenColour to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    //select the button with the same id as the randomChosenColour and animate a flash 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // play the sound for the button colour selected
    playSound(randomChosenColour);

}

// play the sound for the button colour selected
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animate button on click
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    // remove the pressed class after 100 milliseconds
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}
