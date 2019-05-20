//Press any key to get started (req.)
//prompt("Press any key to get started!");

//Logic
//List of different sports
var sportName = ["basketball", "football", "baseball", "soccer", "golf", "tennis", "volleyball", "hockey"];

var guessRemaining = document.getElementById("guess-remaining");
var guesses = 10;
guessRemaining.textContent = guesses;
var currentSport;
var guessedLetters = [];
var guessingWord = [];
var hasFinished = false;


function resetGame (){
    guessRemaining = guesses;
    
}

//Choose random sport
var sportChoice = sportName[Math.floor(Math.random() * sportName.length)];

//Blank array for user guesses & Array for letters of the random sport name
var nameArray =[];
var blankArray = [];
for (var i = 0; i < sportChoice.length; i++){
    var sportNameText = document.getElementById("sportname-text");
    blankArray.push("_");
    sportNameText.textContent = blankArray.join(" ");
    nameArray.push(sportChoice.charAt(i));
    console.log(sportChoice);
}

function makeGuess(letter) {
    if (guessRemaining >0 ){
        if(gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1){
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

};

function evaluateGuess(letter) {
    var positions = [];
    for (var i = 0; i < sportName[currentSport].length; i++){
        if(sportName[currentSport][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0){
        guessRemaining--;
    } else {
        for (var i = 0; i < positions.length; i++){
            guessingWord[positions[i]] = letter;
        }
    }
};

var userGuessText = document.getElementById("user-guess");
userGuessText.textContent = " ";
document.onkeyup = function(event){
    var userGuess = event.key;

    var wrongGuess = userGuess;
    userGuessText.textContent += wrongGuess + " ";
    guesses --;
    guessRemaining.textContent = guesses;

    for (var i = 0; i < nameArray.length; i++){
        if (userGuess === nameArray[i]){
            blankArray[i] = userGuess;
            sportNameText.textContent = blankArray.join(" ");
            console.log(blankArray + "blank");
            console.log(nameArray + "word");
        }
    };

    //Logs wins and losses
    if (nameArray.toString() === blankArray.toString()){
        alert("You win!")
        wins++;
        winsText.textContent = wins;
    };
    if (guesses <= 0){
        alert("You lost!");
        losses ++;
        lossesText.textContent = losses;
    };
}

//W&L

var winsText = document.getElementById("wins-text");
winsText.textContent = wins;
var lossesText = document.getElementById("losses-text");
lossesText.textContent = losses;
