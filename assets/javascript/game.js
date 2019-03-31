// Create variables for data needed in game
var words = ["this", "that", "other"];
// Algorithm for selecting a random word using the index of our words variable
var word = words[Math.floor(Math.random()*words.length)];
// Variable to hold current word
var currentWord = [];
//  For loop that repeats an output for each index of var word
    for (var  i=0; i < word.length; i++) {
        //that output being our currentWord placeholder, having a value of "_"
     currentWord[i] = "_";
    }

var guessedLetters = [];

var winningWord = currentWord.join("")

    
var gameStarted = false;



// Create variables for number of wins and Guesses remaining
var wins = 0;
var guessesLeft = 0;


// Create variables for text shown on page
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesLeftText = document.getElementById("remaining-guesses-text");

// -------------------------Functions are below this line---------------------

// This function resets the game to the starting values
function gameReset() {
    gameStarted = true;
    word = words[Math.floor(Math.random()*words.length)];
    currentWord = [];
    for (var  i=0; i < word.length; i++){
        currentWord[i] = "_";};
    guessedLetters = [];
    guessesLeft = 12;
    
    gameDisplay()

};

// This function controls the display
function gameDisplay(){

    document.getElementById("winstext").innerHTML = "Wins:<br>" + wins;
    document.getElementById("current-word-text").innerHTML = "CurrentWord:<br>" + currentWord;
    document.getElementById("remaining-guesses-text").innerHTML = "Remaining Guesses:<br>" + guessesLeft;
    document.getElementById("letters-guessed").innerHTML = "Letters Guessed:<br>" + guessedLetters;
    if (gameStarted === true){document.getElementById("directions").innerHTML = ""}
    else {document.getElementById("directions").innerHTML = "Press Any Key to get Started!"};
};



document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    //uses event by keyCode to determine A(65) through Z()
    if (event.keyCode >= 65 && event.keyCode <= 90){

        if(gameStarted===false){
            gameReset();
        };
        
        // run the guess check function
       guessCheck(userGuess)
    };

    // Declaring the guessCheck function
    function guessCheck() {
        // if guesses left are greater than 0 then...
        if (guessesLeft > 0) { 
            // if guess has already been used (guessedLetters array INCLUDES userGuess), end the function
            if (guessedLetters.includes(userGuess)){return;}
            else if(word.includes(userGuess)){
                replace(userGuess);
                return;
            }
            else {
                guessedLetters.push(userGuess);
                guessesLeft--;
                gameDisplay();
            }
        }
        if (guessesLeft === 0) {
            gameStarted === false;
            gameReset();
        }
    }

    function replace(){
        for (var  i=0; i < word.length; i++)
        //if userGuess is equal to a letter found in our word
        if (word[i] == userGuess){
        // our currentWord placeholder will have it's "_" replaced with userGuess
                currentWord[i] = word[i]; 
                winningWord = currentWord.join("")
            gameDisplay();    
            } 
    } 

    if (winningWord === word){
        gameStarted === false;
        document.getElementById("directions").innerHTML = "You Win! Press any key to play again!"
        gameReset();

    }

};




