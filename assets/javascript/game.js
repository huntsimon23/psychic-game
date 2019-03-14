var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; 

var wins = 0;
var losses = 0;

document.onkeyup = function(event) {
var userGuess = event.key; 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess == computerGuess) {
    document.getElementById("wins") = wins++
}
    else if (userGuess != computerGuess) {
        document.getElementById("userguesses") = 
    } 
}



