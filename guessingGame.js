/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess
var totalGuesses = 5;
var pastGuesses = [];
var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  return Math.floor(Math.random() * 100);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = Number($('#guess').val());
  $('#guess').val("");
  checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	
}

function guessMessage(){
  
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
  for (var i=0; i<pastGuesses.length; i++) {
    if (pastGuesses[i] === playersGuess) {
      $('#result').text("You already guessed that number!");
      $('#result').css("color", "red");
      return;
    }
  }
  pastGuesses.push(playersGuess);
  totalGuesses -= 1;
	if (playersGuess === winningNumber) {
    $('#result').text("You won!");
    $('#result').css("color", "green");
  }
  else {
    $('#result').text("Try again. You have " + totalGuesses + " guesses remaining.");
    $('#result').css("color", "red");
  }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

