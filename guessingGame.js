/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

// this would be a start!

(function() {
$(document).ready(function() {
  $('#info').keypress(function(event) {
  if (event.which == 13) {
     playersGuessSubmission();
   }
 });
});

var winningNumber = generateWinningNumber();
var totalGuesses = 5;
var pastGuesses = [];
var playersGuess;

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  return(1 + Math.floor(Math.random() * 100));
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = Number($('#guess').val());
  $('#guess').val("");
  checkGuess(playersGuess);
}


// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
  if (playersGuess < winningNumber) {
    return("lower");
  }
  else {
    return("higher");
  }
}

function guessMessage(){
  var amountOff = Math.abs(playersGuess - winningNumber);
  return("Your guess is " + lowerOrHigher(playersGuess, winningNumber) + " and within " + Math.ceil(amountOff/5)*5 + " of the number I'm thinking of.");
}

// Check if the Player's Guess is the winning number 

function checkGuess(){

  if (isNaN(playersGuess) || playersGuess < 1 || playersGuess > 100) {
      $('#result').text("Not a valid number!");
      $('#result').css("color", "red");
      return;
  }

  for (var i=0; i<pastGuesses.length; i++) {
    if (pastGuesses[i] === playersGuess) {
      $('#result').text("You already guessed that number!");
      $('#result').css("color", "red");
      return;
    }
  }

  pastGuesses.push(playersGuess);
  $('#pastguesses').text("Past guesses: " + pastGuesses.join(", "));
  totalGuesses -= 1;

	if (playersGuess === winningNumber) {
    $('#result').text("You won!");
    $('#result').css("color", "green");
    $('#result').css("font-size", "55px");
    $('.lead').text("Get out of my head!");
    $('h1').text("Seriously?")
    $('form').hide();
    $('#hint').hide();
    $('#check').hide();
    return;
  }
  else {
    if (totalGuesses === 0) {
      $('#result').text("Sorry, you lose.");
      $('form').hide();
      $('#hint').hide();
      $('#check').hide();
      return;
    }
    $('#result').text(guessMessage(playersGuess, winningNumber) + " Try again. You have " + totalGuesses + " guesses remaining.");
    $('#result').css("color", "red");
  }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
  var newarr = [];
  for (var i=1; i<totalGuesses*2; i++) {
    newarr.push(1 + Math.floor(Math.random() * 100));
  }
  newarr[Math.floor(Math.random()*newarr.length)] = winningNumber;
  $('#result').text("One of these numbers is the winner: " + newarr.join(", "));
}

// Allow the "Player" to Play Again

function playAgain(){
  location.reload();
  //I found the trick above, but
  //below is the hard way:
	/*totalGuesses = null;
  pastGuesses = null;
  winningNumber = null;
  $('#result').text("You have 5 guesses remaining."); 
  $('#guess').text("Number from 1-100");
  $('#result').css("color", "blue");
  $('#result').css("font-size", "21px");
  $('#pastguesses').text("");
  $('.lead').text("You can't fathom the depths of my mind. Or can you?");
  $('h1').text("Guess the Number I'm Thinking Of");
  $('form').show();
  $('#hint').show();
  $('#check').show();*/
}

/* **** Event Listeners/Handlers ****  */

// Now everything is scoped to this Immediately Invoked Function!
})();
