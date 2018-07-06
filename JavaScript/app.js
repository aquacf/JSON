//Checking to see that app.js in linked to our index.html
console.log("Web page is linked");

var nameOfVariable; // declaring our variable

nameOfVariable = "Hello";

var test = "Hello"; // bettter practice
console.log(test);
test = "Bye";
console.log(test);


//DATA TYPES
//numbers
//Booleanstring
//undefined
//object
//null


//declares our function
function nameOfFunction(){
	var text; //This is a local variable and can have the same name as a global variable
	text = "This is JavaScript Week";
	//alert("Hello");
	console.log(text);
}
nameOfFunction(); //runs our function


function addNumbers(){
	var firstNumber = 5;
	var secondNumber = 15;
	console.log(firstNumber + " + " + secondNumber +  " = " + (firstNumber + secondNumber));
}
addNumbers();


var _eventListener = document.getElementById("userButton").addEventListener('click', addSums);

function addSums(){
	//	console.log("Function is working");	
	//	var userInput = document.getElementById("ourUserInput").value;
	//	console.log(userInput);
	//	document.getElementById("displayResult").innerHTML = userInput;


	var firstValue = document.getElementById("ourUserInput").value;
	var secondValue = document.getElementById("secondUserInput").value;

	//	console.log(firstValue);

	document.getElementById("displayResult").innerHTML = firstValue + " + " + secondValue +  " = " + (parseInt(firstValue) + parseInt(secondValue));

}


var calculation = document.getElementById("userBtn").addEventListener('click', differenceBetween);




function differenceBetween(){

	console.clear();
	var first = parseInt(document.getElementById("one").value);
	var second = parseInt(document.getElementById("two").value);
	var third = parseInt(document.getElementById("three").value);

	var firstCalculation = (first + second + third) * third;
	var secondCalculation = first + second + third;

	console.log("First: " + firstCalculation);
	console.log("Second: " + secondCalculation);
	console.log("Difference: " + (firstCalculation - secondCalculation));

	document.getElementById("result").innerHTML = "The difference between the 2 values is: " +  (parseInt(firstCalculation) - parseInt(secondCalculation));

}

var taskOne = document.getElementById("taskOneButton").addEventListener('click', taskOneFunction);
function taskOneFunction(){
	var first = document.getElementById("taskOneInput").value;
	alert(first);
}

function taskTwoFunction(a, b, c){
	var x = parseInt(a) + parseInt(b) + parseInt(c);
	console.log(x);
	document.getElementById("taskTwoDiv").innerHTML = x;

}
taskTwoFunction(2, 18, 7);



//Task 3
var hello = "global";
function taskThree(){

	document.getElementById("taskThreeDivGlobal").innerHTML = hello;

	hello = "something different";
	document.getElementById("taskThreeDivLocal").innerHTML = hello;

}
taskThree();



var taskOne = document.getElementById("taskFiveButton").addEventListener('click', taskFive);

//Task 5
function taskFive(){



	var first = parseInt(document.getElementById("taskFiveInputOne").value);
	var second = parseInt(document.getElementById("taskFiveInputTwo").value);

	console.log(first);
	console.log(second);

	if(first == second)
	{
		document.getElementById("taskFiveResult").innerHTML = "Values are equal";

	}
	else
	{
		document.getElementById("taskFiveResult").innerHTML = "Values are different";

	}

}
taskFive();



//Age checker
var ageChecker = document.getElementById("ageCheckerButton").addEventListener('click', ageChecker);
function ageChecker(){
	var dob = new Date(document.getElementById("dobInput").value);
	//	console.log("Compare: " + dob);
	var ageDifMs = Date.now() - dob.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch

	if(dob >= Date.now())
	{
		document.getElementById("ageCheckerResult").innerHTML = "DOB can't be greater than today's date!";
	}
	else
	{
		document.getElementById("ageCheckerResult").innerHTML = "Age: " + Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}


var ageCompare = document.getElementById("compareButton").addEventListener('click', ageCompare);
function ageCompare(){

	var dob = new Date(document.getElementById("dobInput").value);
	var compare = new Date(document.getElementById("dobCompare").value);

	console.log("Compare: " + dob);

	var ageDifMs = compare.getTime() - dob.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch

	document.getElementById("compareResult").innerHTML = "You will be: " + Math.abs(ageDate.getUTCFullYear() - 1970);

}
