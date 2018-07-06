//FOR LOOPS
//SYNTAX
//for(initialisation; test condition; iteration statement){
//	statement to be executed if the test condition is true
//}


var cars;

console.log("Beginning of for loop");


//For loop should be used when the user is aware of the number of iterations.

//for(cars=0; cars < 10; cars++)
//{
//	console.log("Current number of cars: " + cars);
//}


//******* TASK 1 *******
var taskOneEventListener = document.getElementById("task1Button").addEventListener('click', forLoop);

function forLoop() {
	var taskOne;
	for (taskOne = 1; taskOne <= 50; taskOne++) {
		document.getElementById("task1Result").innerHTML += taskOne + ", ";
	}
}


//******* TASK 2 *******
var taskTwoEventListener = document.getElementById("task2Button").addEventListener('click', taskTwo);

function taskTwo() {
	var taskTwo;

	for (taskTwo = 1; taskTwo <= 20; taskTwo++) {
		if (taskTwo % 2 == 0) {
			document.getElementById("task2Result").innerHTML += taskTwo + " = even" + "<br/>";
		} else {
			document.getElementById("task2Result").innerHTML += taskTwo + " = odd" + "<br/>";
		}
	}
}


//If statement syntax

var doorNumber = 12;

if (doorNumber > 12) {
	console.log("if statement is true");
} else {
	console.log("if statement is false");
}



//******* TASK 3 *******
var task3EventListener = document.getElementById("task3Button").addEventListener('click', task3);

function task3() {

	var userInput = document.getElementById("task3Input").value;

	console.log(userInput);

	switch (true) {
		case (userInput < 10 && userInput >= 0):
			document.getElementById("task3Result").innerHTML = userInput + " is less than 10";
			break;
		case (userInput > 10):
			document.getElementById("task3Result").innerHTML = userInput + " is more than 10";
			break;
		case (userInput < 0):
			document.getElementById("task3Result").innerHTML = userInput + " is a negative number";
			break;
		default:
			document.getElementById("task3Result").innerHTML = "Number = 10";
			break;
	}


	//
	//	if(userInput < 10 && userInput >= 0)
	//	{
	//		document.getElementById("task3Result").innerHTML = userInput + " is less than 10";
	//	}
	//	else if(userInput > 10)
	//	{
	//		document.getElementById("task3Result").innerHTML =  userInput + " is more than 10";
	//	}
	//	else if(userInput < 0)
	//	{
	//		document.getElementById("task3Result").innerHTML = userInput + " is a negative number";
	//	}
	//	else
	//	{
	//		document.getElementById("task3Result").innerHTML = "Number = 10";
	//	}
}



//******* TASK 4 *******
var task4EventListener = document.getElementById("task4Button").addEventListener('click', task4);

function task4() {
	var userInput1 = document.getElementById("task4Input").value;
	var userInput2 = document.getElementById("task4Input2").value;

	console.log(task4);

	if (userInput1 > 10 && userInput2 > 10) {
		document.getElementById("task4Result").innerHTML = "Both numbers are greater than 10";
	} else if ((userInput1 > 10 && userInput2 <= 10) || (userInput1 <= 10 && userInput2 > 10)) {
		document.getElementById("task4Result").innerHTML = "One number is greater than 10";
	} else {
		document.getElementById("task4Result").innerHTML = "Both numbers are NOT greater than 10";
	}
}


//******* TASK 5 *******
var task5EventListener = document.getElementById("task5Button").addEventListener('click', task5);

function task5() {

	var number1 = 1;
	var number2 = 1;

	//Clear innerHTML so if you click button more than once it will only show one copy.
	document.getElementById("task5Result").innerHTML = "";
	document.getElementById("task5Result2").innerHTML = "";

	for (number1; number1 <= 10; number1++) {
		if (number1 < 10)
			document.getElementById("task5Result").innerHTML += number1 + ", ";
		else
			document.getElementById("task5Result").innerHTML += number1;

		for (number2; number2 <= 10; number2++) {
			if (number2 < 10)
				document.getElementById("task5Result2").innerHTML += number2 + ", ";
			else
				document.getElementById("task5Result2").innerHTML += number2;

		}
	}
}


//******* TASK 6 *******
var markCheckerEventListener = document.getElementById("markCheckerButton").addEventListener('click', markChecker);

function markChecker() {

	var userInput = document.getElementById("markCheckerInput").value;

	//Set value to 0 if user input is less than 0
	if (userInput < 0) {
		document.getElementById("markCheckerInput").value = 0;
	}
	//Set value to 100 if user input is greater than 100
	else if (userInput > 100) {
		document.getElementById("markCheckerInput").value = 100;
	}



	if (userInput >= 90) {
		document.getElementById("markCheckerResult").innerHTML += "<br/>Distinction";
	} else if (userInput >= 75) {
		document.getElementById("markCheckerResult").innerHTML += "<br/>Merit";
	} else if (userInput >= 60) {
		document.getElementById("markCheckerResult").innerHTML += "<br/>Pass";
	} else {
		document.getElementById("markCheckerResult").innerHTML += "<br/>Fail";
	}
}



//SYNTAX FOR A WHILE LOOP
//Use a While loop when the number of iterations is unknown
//while(codition)
//	{
//		the statement that runs if the condition is true
//	}



var houses = 0;

console.log("While loop start");

while (houses < 10) {
	console.log("Current number of houses: " + houses);
	houses++;
}
console.log("While loop end");




//******* TASK 6 *******
var task6EventListener = document.getElementById("task6Button").addEventListener('click', task6);

function task6() {
	var task6 = 1;

	while (task6 <= 10) {
		document.getElementById("task6Result").innerHTML += "<br/>" + task6;
		task6++;
	}
}


//SYNTAX FOR A DO WHILE LOOP
//Even if the condition is false, the code will still execute once
//do{
//	code to execute
//}
//while(condition);

houses = 0;

console.log("do while start")
do {

	console.log("Current number of houses: " + houses);
	houses++;
}
while (houses == 0);
console.log("do while end")


//******* TASK 7 *******
var task7EventListener = document.getElementById("task7Button").addEventListener('click', task7);

function task7() {
	var task7 = 1;

	do {
		document.getElementById("task7Result").innerHTML += "<br/>" + task7;
		task7++;
	}
	while (task7 <= 10)
}



//SYNTAX FOR SWITCH STATEMENT
//switch(condition){
//	case condition1: 
//		statement;
//		break;
//	case condition2:
//		statement;
//		break;
//	case condition3:
//		statement;
//		break;
//	default:
//		statement;
//		break;
//				}

var bankBalance = 10;
console.clear();
console.log("switch start");

switch (bankBalance) {
	case 0:
		console.log("What happened?");
		break;
	case 1000:
		console.log("Keep going");
		break;
	case 10000:
		console.log("Almost there");
		break;
	case 100000:
		console.log("Living the dream");
		break;
	default:
		console.log("None of the cases have been met");
		break;
}
console.log("switch end");




//	****************** ARRAYS	******************
// A collection of things
// The syntax for declaring a new array
// Arrays can hold any data type

var students = new Array("Archie", "Cian", "Henry"); //This allows you to set length before adding any items.
var students1 = ["Archie", "Cian", "Henry"] //This way is best practice.

console.log(students);
console.log(students1);

var randomDataType = [
		1, //number
		"Test", //string
		false, //bool

	{ //object
		name: "Cian",
		_class: "JavaScript"
	},
	function (_class) {
		var greeting = "Good Morning ";
		console.log(greeting + _class);
	}
	];

console.log(randomDataType);
randomDataType[4](randomDataType[3].name);



console.clear();
//	****************** OBJECTS	******************
// Objects are a collection of properties and methods

var students = new Object();
// The [] brackets are an operator that takes the students object and sets the property in this case a string	
students["FirstName"] = "Jeff";
students["Class"] = "JavaScript";

//The dot presedence works from left to right which means we can continuously create more
//Having a nested object (object within an object)
students.address = new Object();
students.address.street = "Minories";
students.address.doorNumber = 7;
console.log(students.address);


//CREATING AN OBJECT EXAMPLE 2
var student1 = {
	firstName: "Bill",
	lastName: "Gates",
	address: {
		doorNumber: 150,
		street: "Minories",
		postCode: "EC3N 1LS"
	},
	fullName: function () {
		return student1.firstName + " " + this.lastName;
	}

};
console.log(student1.fullName());

//
//function greeting() {
//	return "Good morning " + student1.firstName;
//}
//greeting();
//
//student1.dob = {
//	dayOfBirth: "11",
//	monthOfBirth: "July",
//	yearOfBirth: "1994"
//};
//
//console.log(student1);




var cars = {
	audi: "A5",
	landRover: "Defender",
	ford: "GT"
};

//document.getElementById("objectResult").innerHTML = JSON.stringify(cars.audi);

document.getElementById("objectResult").innerHTML = Object.values(cars);
document.getElementById("objectResult").innerHTML = "The properties in the cars object are " + Object.keys(cars);




//TASK 2
document.getElementById("objectResult").innerHTML = "The properties in the cars object are: <br>";
var obj = Object.keys(cars);
for (var prop in obj) {
	// skip loop if the property is from prototype
	if (!obj.hasOwnProperty(prop)) continue;

	console.log(obj[prop]);
	document.getElementById("objectResult").innerHTML += obj[prop] + "<br>";

}


////TASK 4
//var fruit = {
//	apple: "red",
//	banana: "yellow",
//	pear: "green",
//	veg: {
//		peas: "green",
//		carrot: "orange"
//	}
//};
//
//document.getElementById("objectResult").innerHTML = Object.keys(fruit.veg);


//TASK5
//Build an object constructor
// - create 2 instances of the object
// - display the properties of the object instances onto the webpage

function Person(firstName, lastName, age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}
	
	var personA = new Person("Tom", "Smith", 23);
	var personB = new Person("Adam", "Martin", 25);
	
	var personAProperties = Object.keys(personA);
	var personBProperties = Object.keys(personB);

	
	document.getElementById("objectConstructor").innerHTML = JSON.stringify(personA);
	document.getElementById("objectConstructor2").innerHTML = JSON.stringify(personB);
	
	console.log(personA);
	console.log(personB);