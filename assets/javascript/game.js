var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z",]; 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessText = [];

var userGuessText = document.getElementById("userguesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
guessesLeftText.textContent = guessesLeft;

document.onkeyup = function(event) {
    var userGuess = event.key; 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess) {
        wins++;
        winsText.textContent = wins;
        guessesLeft = 9;
        alert("You win, computer chose " + computerGuess + " and so did you!");
        userGuessText.textContent = [];
        guessText = [];
}   
    else {
    guessesLeft = (guessesLeft - 1);     
    guessesLeftText.textContent = guessesLeft;
    guessText.push(userGuess);
    userGuessText.textContent = guessText; 
}
    if (guessesLeft === 0) {
    losses++;
    lossesText.textContent = losses;
    guessesLeft = 9;
    alert("Sorry, out of tries.  Give it another shot.")
    guessesLeftText.textContent = guessesLeft;
    userGuessText.textContent = [];
    guessText = [];
}
    else {
        
}

}