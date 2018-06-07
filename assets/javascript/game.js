//  array of words
var word = ["Messi", 
"Neymar", 
"Salah", 
"Silva", 
"James", 
"Sterling", 
"Ronaldo", 
"Ramos", 
"Pique", 
"Suarez", 
"Isco", 
"Kroos",]
// Choose word randomly 
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var underScore = [];
var rightWord = [];
var wrongWord = [];
var UnderScore = document.getElementsByClassName("Guessword");
var Rightguess = document.getElementsByClassName("winCount");
var WrongGuess= document.getElementsByClassName("wrongGuess");
var rightGuess = 0;
var numSpaces = 0;
var ltrWord = [];
var Winner = 0;
var Lose = 0;
var Guessleft = 5;

console.log(choosenWord);
var generateUnderscore = () => {
    for(var i = 0; i< choosenWord.length; i++){
        underScore.push("_");
    
    }
    return underScore;
}
console.log(generateUnderscore());

document.addEventListener("keypress", (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
 // if user guess is correct
    if (choosenWord.indexOf(keyWord) > -1){
// add to right word array 
    rightWord.push(keyWord);
// underscore letter
    underScore[choosenWord.indexOf(keyWord)] = keyWord;
    UnderScore[0].innerHTML = underScore.join(" ");
    if(underScore.join(" ") == choosenWord){
        alert("Correct!!");
    }
}
    else {
        wrongWord.push(keyWord);
        WrongGuess[0].innerHTML = wrongWord;
    }
});

function reset()
{
    numSpaces = ltrWord.length;
    ltrWord = choosenWord.split(" ");
    choosenWord = word[randNum];
    
    rightGuess = 0;
    Guessleft = 5;
    

    
}

function Start()
{
    choosenWord = word[randNum];
    numSpaces = ltrWord.length;
    ltrWord = choosenWord.split(" ");

   
}

// Check if guess is right 
// If right push to right array 
// If wrong push to wrong array 

//function compareLetters(userKey)
