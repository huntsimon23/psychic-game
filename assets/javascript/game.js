var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; 

var wins = 0;
var losses = 0;
var guessesLeft = 9;

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
        
}   
    else {
    (userGuessText.textContent = userGuess);
    guessesLeft = (guessesLeft - 1);     
    guessesLeftText.textContent = guessesLeft;
    
    function addLetters() {
        var node = document.createElement("span");
        var textnode = document.createTextNode(userGuess);
        node.appendChild(textnode);
        document.getElementById("userguesses-text").appendChild(node);}
}
    if (guessesLeft < 1) {
    losses++;
    lossesText.textContent = losses;
    guessesLeft = 9;
    alert("Sorry, out of tries.  Give it another shot.")
}
}

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// function addLetters() {
//     var node = document.createElement("span");
//     var textnode = document.createTextNode(userGuess.key);
//     node.appendChild(textnode);
//     document.getElementById("myuserguesses-text").appendChild(node);}