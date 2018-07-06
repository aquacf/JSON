console.log("test");


////ARRAY 1
//var array1EventListener = document.getElementById("createArray").addEventListener('click', array1);
//
//function array1() {
//	var userInput1 = document.getElementById("input1").value;
//	var userInput2 = document.getElementById("input2").value;
//	var userInput3 = document.getElementById("input3").value;
//
//	var array1 = [userInput1, userInput2, userInput3];
//
//	document.getElementById("arrayresult").innerHTML = array1[0];
//	document.getElementById("arrayresult1").innerHTML = array1[1];
//	document.getElementById("arrayresult2").innerHTML = array1[2];
//}
//
//
//
//
//
//
////ARRAY 2
//var array2EventListener = document.getElementById("createArray").addEventListener('click', array2);
//
//function array2() {
//	var userInput1 = document.getElementById("input1").value;
//
//	var numbers = [];
//
//	var length = numbers.push(userInput1);
//
//	document.getElementById("result").innerHTML = "result: " + numbers;
//	document.getElementById("lengthcounter").innerHTML = "length: " + numbers.length;
//
//}


////ARRAY 3
//var array3 = [];
//
//
//var array3PushEventListener = document.getElementById("_push").addEventListener('click', array3push);
//
//function array3push() {
//	var userInput = document.getElementById("lab22input").value;
//	var push = array3.push(userInput);
//	document.getElementById("lab1result").innerHTML = "Array: " + array3;
//	console.log("array 3 push = " + array3);
//}
//
//
//var array3PopEventListener = document.getElementById("pop").addEventListener('click', array3Pop);
//
//function array3Pop() {
//	var push = array3.pop();
//	document.getElementById("lab1result").innerHTML = "Array: " + array3;
//	console.log("array 3 pop = " + array3);
//}
//
//
//var array3ShiftEventListener = document.getElementById("shift").addEventListener('click', array3Shift);
//
//function array3Shift() {
//	var shift = array3.shift();
//	document.getElementById("lab1result").innerHTML = "Array: " + array3;
//	console.log("array 3 shift = " + array3);
//}
//
//
//var array3UnshiftEventListener = document.getElementById("unshift").addEventListener('click', array3unshift);
//
//function array3unshift() {
//	var userInput = document.getElementById("lab22input").value;
//	var unshift = array3.unshift(userInput);
//	document.getElementById("lab1result").innerHTML = "Array: " + array3;
//	console.log("array 3 push = " + array3);
//}




////ARRAY 4 START
//
//var array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//document.getElementById("arrayDisplay").innerHTML = array4;
//
//var array4EventListener = document.getElementById("buttonAdd").addEventListener('click', array4Function);
//
//function array4Function() {
//	var value = document.getElementById("input1").value;
//	var position = document.getElementById("input2").value - 1;
//	var remove = array4.splice(position, 0, value);
//	document.getElementById("result2").innerHTML = array4;
//}
//
//
//var array4RemoveEventListener = document.getElementById("buttonRemove").addEventListener('click', array4Remove);
//
//function array4Remove() {
//	var position = document.getElementById("input3").value - 1;
//	var remove = array4.splice(position, 1);
//	document.getElementById("result2").innerHTML = array4;
//}
//
////ARRAY 4 END


////ARRAY 5 START
////Create an array variable with 10 elements and using a for loop display each element on the webpage
////var eventListener = document.getElementById("displayButton").addEventListener('click', array5);
//
//function looparray() {
//
//	console.log("sdf");
//
//	var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//	var arrayLength = myArray.length;
//	for (var i = 0; i < arrayLength; i++) {
//		document.getElementById("myarray").innerHTML += myArray[i] + "<br/>";
//	}
//
//}
////ARRAY 5 END



//ARRAY 6 START

var eventListener = document.getElementById("mybee").addEventListener('click', array6);

function array6() {

	var countriesArray = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

	var userInput = document.getElementById("guess").value;

	if (countriesArray.includes(userInput)) {

		var position = countriesArray.indexOf(userInput) + 1;
		console.log(position);


		document.getElementById("myarray3").innerHTML = "This item was found in the array in position " + position;
	} else {
		document.getElementById("myarray3").innerHTML = "This item was not found in the array";
	}
	// Create a user text input. user can enter a country.
	//The array is searched and when a match is found the position in the array is displayed and the user is given a message to inform whether the country is present or not in the array.

}
//ARRAY 6 END
