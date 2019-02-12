//Creates an array that lists out all of the options
var alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Start at Zero
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = []
var lettersLeft = null;

// Computer randomly selects item from alphabetList 
      let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//User gets 10 guesses
var updateGuessesLeft = function() {
// display GuessesLeft     
document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function(){
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//spit out letters guessed so far, delineated by commas
var updateGuessesMade = function() {
    document.querySelector('#let'.innerHTML = "You've already guessed: " + guessedLetters.join(',');
};

//Reset function
var reset = "function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];
}

updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// user selects letter choice
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

guessedLetters.push(userGuess)
updateGuessesLeft();
updateGuessesSoFar();

if (guessesLeft > 0) {
    if (userGuess == letterToGuess) {
        wins++;
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    alert("You must be a psychic!);
    reset();
    }
}else if (guessesLeft == 0){
//Display losses
losses++;
document.querySelector(#'losses').innerHTML = "Losses:" + losses;
    alert("Maybe you aren't so much of a psychic. That's ok. Try again.);
reset();
}
};
