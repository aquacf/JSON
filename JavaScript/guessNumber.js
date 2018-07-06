
var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

var numberOfGuesses = 0;

var eventListener = document.getElementById("btn2").addEventListener('click', guessFunction);

function guessFunction(){
	var usersGuess = document.getElementById("guess").value;

	console.log("clicked");
	console.log(usersGuess);
	if(usersGuess > randomNumber && usersGuess <= 100)
	{
		document.getElementById("resultguess").innerHTML = "Your guess is too high!";
	}
	else if(usersGuess < randomNumber && usersGuess >0)
	{
		document.getElementById("resultguess").innerHTML = "Your guess is too low!";
	}
	else if(usersGuess == randomNumber && document.getElementById("btn2").innerHTML != "Well done")
	{
		document.getElementById("resultguess").innerHTML = "Well done - correct guess!";
		document.getElementById("compareresult").innerHTML = "The correct number is: " + randomNumber;
		document.getElementById("btn2").innerHTML = "Well done";
		numberOfGuesses++;
		document.getElementById("counterresult").innerHTML = "Number of guesses: " + numberOfGuesses;
	}
	else if(usersGuess <=0 || usersGuess >100)
	{
		document.getElementById("resultguess").innerHTML = "Your guess must be between 1-100!";
	}
	if(document.getElementById("btn2").innerHTML != "Well done")
	{
		numberOfGuesses++;
		document.getElementById("counterresult").innerHTML = "Number of guesses: " + numberOfGuesses;
	}

}