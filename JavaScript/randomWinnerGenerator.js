console.log("connected");

var arrayNames = [];

var eventListener = document.getElementById("btn1").addEventListener('click', enterNames);

function enterNames() {
	var userInput = document.getElementById("lab19input").value;
	if (userInput != "") {
		var addItemToArray = arrayNames.push(userInput);
		document.getElementById("lab19input").value = "";
		console.log(arrayNames);
	}
}

var eventListener2 = document.getElementById("btn2").addEventListener('click', generateRandomWinner);

function generateRandomWinner() {
	if (arrayNames.length <= 1) {
		document.getElementById("output1").innerHTML = "You must enter more than one user to play";
	} else {
		var winner = arrayNames[Math.floor(Math.random() * arrayNames.length)];
		document.getElementById("output1").innerHTML = "The random winner is " + winner;
	}
}
