//Variables
//----------------------------

// array of possible movie selections- words to be guess
var currency = ["usdollar", "euro", "renminbi", "dinar", "yen", "pound", "rupee", "ruble", "thaibaht", "krona",  ];
// randomly selected word
var selectedCurrency = ""; 
// number of letters in selected word
var lettersInWord = [];
// number of blanks for selected word-use document.getElementById("")
var numberOfBlanks = 0;
// blanks plus correctly guessed letters
var partiallySolved =[];
// incorrrect guesses
var wrongGuesses = [];



// counters- (use document.getElementById("")
var winCount = 0;
var loseCount = 0;
var guessesLeft = 12;
var correct = 0;

// functions
//-------------

// function to set up the game

//function functionName(parameters) {
	//code to be executed} 
	
function startGame()
{
	// use Math.floor(Math.random() - to make random selection of movie from currency array
	selectedCurrency = currency[Math.floor(Math.random() * currency.length)];
	console.log(selectedCurrency);
    
	// selected word is split into letters
	lettersInWord = selectedCurrency.split("");
	console.log(lettersInWord);
    
	// number of blanks is determined
	numberOfBlanks = lettersInWord.length;

	//create a for loop to run through each letter of the seleted movie  (numberOfBlanks)
	for(var i = 0; i< numberOfBlanks; i++)
	{
		partiallySolved.push("_");
		document.getElementById("currencyGuess").innerHTML = partiallySolved;
	}
	
	// setting letters that can be used when guessing the movie
	
	letters = ["a","b","c",
				"d","e","f",
				"g","h","i",
				"j","k","l",
				"m","n","o",
				"p","q","r",
				"s","t","u",
				"v","w","x",
				"y","z"];
	
	// once variables are define updates the ids on HTML 
	document.getElementById("currencyGuess").innerHTML = partiallySolved.join(" ");
	document.getElementById("numberOfGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = loseCount;
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
}

// function to compare letters from user to letters to be guess
//funtio =nameOfFunction(parameters)    parameters- names listed in the function definition
function compareLetters(guess)
{
				// if the letter selected is in the word 
				if(lettersInWord.indexOf(guess) > -1)
				{
					// loops one by one on the number of blanks letter
					for(var i = 0; i < numberOfBlanks; i++)
					{
						// puts letter into corresponding index of the array
						if(lettersInWord[i] === guess)
						{
							correct++;
							partiallySolved[i] = guess;
							document.getElementById("currencyGuess").innerHTML = partiallySolved.join(" ");
						}	
					}
				}
				// incorrect guesses
				else
				{
					wrongGuesses.push(guess);
					guessesLeft--;
					// updates the HTML
					document.getElementById("numberOfGuesses").innerHTML = guessesLeft;
					document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
                }
			
			
		
}

// determine a win or loss
function winLose()
{
	// When number blanks if filled with right words then you win
	if(correct === numberOfBlanks)
	{
		//Counts Wins +1
		winCount++;
		//Changes HTML
		document.getElementById("winCounter").innerHTML = winCount;
		alert("You Win");
		
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById("lossCounter").innerHTML = loseCount;
		alert("You Lose");
		
	}
}

// when the play again button is clicked the reset function sets up a new game
$("#resetButton").on("click", function reset()
{
	
	selectedCurrency = currency[Math.floor(Math.random() * currency.length)];
	lettersInWord = selectedCurrency.split("");
	numberOfBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	correct = 0;
	guessesLeft = 12;
	wrongGuesses =[];
	partiallySolved =[];
	
	test=false;
	startGame();
})

// initialize game
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < letters.length; i++)
	{	
		if(letterGuessed === letters[i] && test === true)
		{
            // doesn't coun letters against you if they were alredy typed.
            var spliceLetters = letters.splice(i,1);

			compareLetters(letterGuessed);
            winLose();
		}
	}		
		
}