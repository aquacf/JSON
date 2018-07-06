/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */



document.getElementById("manufacturer").addEventListener("change", getSelectedText);

function comboClick() {

	var item = document.getElementById("manufacturer").value;

	console.log(item);


	//	switch (item) {
	//		case "0":
	//			console.log("Rolls Royce");
	//			break;
	//		case "1":
	//			console.log("Aston Martin");
	//			break;
	//		case "2":
	//			console.log("Bugatti");
	//			break;
	//		case "3":
	//			console.log("Ferrari");
	//			break;
	//		case "4":
	//			console.log("Pagani");
	//			break;
	//		case "5":
	//			console.log("W Motors");
	//			break;
	//		case "6":
	//			console.log("Lamborghini");
	//			break;
	//		case "7":
	//			console.log("Koenigsegg");
	//			break;
	//		case "8":
	//			console.log("Mercedes-Benz");
	//			break;
	//	}
}

var manufacturer = document.getElementById("manufacturer");
var manufacturerID;

function getSelectedText() {


	if (manufacturer.selectedIndex == 0) {
		console.log("First value");
		//		return null;
	} else {


		manufacturerID = manufacturer.options[manufacturer.selectedIndex].value;
		console.log(manufacturerID);
		//	return manufacturerID;
	}



	//Create a variable that stores our XMLHttpRequest object
	var ourRequest = new XMLHttpRequest();
	// the .open method prepares the request. Then takes in 3 parameters which are as follows: HTTP method("GET" or "POST), the url of the page (our GitHub .json file), and a boolean value of true to set asynchronous value.
	ourRequest.open("GET", "https://raw.githubusercontent.com/Auwais/JSON-AJAX-API-/master/LuxuryCarsLearner/expensiveLuxuryCars.json", true);

	//When the browser has received the loaded response from the server it will trigger the anonymous function
	ourRequest.onload = function () {
		// Ready state = 4 is "DONE - The operation is complete."
		if (ourRequest.readyState == 4 && ourRequest.status == 200) {

			//JSON.parse() processes a string containing the JSON data and converts it into a JavaScript object ready for us to use.
			ourData = JSON.parse(ourRequest.responseText);

			console.log(ourData);

			if (manufacturer.selectedIndex != 0) {
				//calling the displayText function and passing in our parameter (our parsed JSON data);
				displayText(ourData);
			} else {
				document.getElementById("manufacturerC").innerHTML = "";
				document.getElementById("modelC").innerHTML = "";
				document.getElementById("imgC").innerHTML = "";
				document.getElementById("videoC").innerHTML = "";
				document.getElementById("descriptionC").innerHTML = "";
				document.getElementById("priceC").innerHTML = "";
				document.getElementById("overallC").innerHTML = "";
				document.getElementById("mechanicalC").innerHTML = "";
				document.getElementById("powertrainC").innerHTML = "";
				document.getElementById("bodyC").innerHTML = "";
				document.getElementById("interiorC").innerHTML = "";
				document.getElementById("accessoriesC").innerHTML = "";


			}


		} else {
			document.getElementById("messageAlert").innerHTML = "There was an error with our servers";
		}
	}
	//Sends the request to the server (only used for GET requests)
	ourRequest.send();
}


function displayText(json) {

	console.log("id = " + manufacturerID);

	document.getElementById("manufacturerC").innerHTML = json.data[manufacturerID].manufacturer;
	document.getElementById("modelC").innerHTML = json.data[manufacturerID].model;
	document.getElementById("imgC").innerHTML = "<img src=\"" + json.data[manufacturerID].img + "\"/>";
	document.getElementById("videoC").innerHTML = "<iframe src=\"" + json.data[manufacturerID].video + "\"/>";
	document.getElementById("descriptionC").innerHTML = json.data[manufacturerID].description;
	document.getElementById("priceC").innerHTML = "£" + json.data[manufacturerID].price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
	document.getElementById("overallC").innerHTML = json.data[manufacturerID].quality[0].rating;
	document.getElementById("mechanicalC").innerHTML = json.data[manufacturerID].quality[1].rating;
	document.getElementById("powertrainC").innerHTML = json.data[manufacturerID].quality[2].rating;
	document.getElementById("bodyC").innerHTML = json.data[manufacturerID].quality[3].rating;
	document.getElementById("interiorC").innerHTML = json.data[manufacturerID].quality[4].rating;
	document.getElementById("accessoriesC").innerHTML = json.data[manufacturerID].quality[5].rating;

}
