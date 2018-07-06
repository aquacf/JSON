document.getElementById("runButton").addEventListener('click', runAPI);

//function runAPI() {
//	var url = "https://raw.githubusercontent.com/aquacf/JSON/master/cars.json";
//	$.ajax({
//		url: url,
//		success: function (result) {
//			document.getElementById("display").innerHTML = result;
//		}
//	});
//}

var ourData;

function runAPI() {
	//Create a variable that stores our XMLHttpRequest object
	var ourRequest = new XMLHttpRequest();
	// the .open method prepares the request. Then takes in 3 parameters which are as follows: HTTP method("GET" or "POST), the url of the page (our GitHub .json file), and a boolean value of true to set asynchronous value.
	ourRequest.open("GET", "https://raw.githubusercontent.com/aquacf/JSON/master/cars.json", true);

	//When the browser has received the loaded response from the server it will trigger the anonymous function
	ourRequest.onload = function () {
		// Ready state = 4 is "DONE - The operation is complete."
		if (ourRequest.readyState == 4 && ourRequest.status == 200) {

			//JSON.parse() processes a string containing the JSON data and converts it into a JavaScript object ready for us to use.
			ourData = JSON.parse(ourRequest.responseText);

			console.log(ourData);

			//calling the displayText function and passing in our parameter (our parsed JSON data);
			//displayText(ourData);
			displayTable();
			//document.getElementById("display").innerHTML = ourData[0].make + " price = " + ourData[0].price;

		} else {
			document.getElementById("errors").innerHTML = "There was an error with our servers";
		}
	}



	ourRequest.send();
}

function displayText(data) {
	document.getElementById("display").innerHTML = data[0].make + " price = " + data[0].price;

}





function displayTable() {
	// EXTRACT VALUE FOR HTML HEADER. 
	// ('Book ID', 'Book Name', 'Category' and 'Price')
	var col = [];
	for (var i = 0; i < ourData.length; i++) {
		for (var key in ourData[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	// CREATE DYNAMIC TABLE.
	var table = document.createElement("table");
	table.className = "table table-striped table-hover";

	// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

	var tr = table.insertRow(-1); // TABLE ROW.

	for (var i = 0; i < col.length; i++) {
		var th = document.createElement("th"); // TABLE HEADER.
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// ADD JSON DATA TO THE TABLE AS ROWS.
	for (var i = 0; i < ourData.length; i++) {

		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			var x = ourData[i][col[j]];
			if (x == undefined) {
				tabCell.innerHTML = "auto";
			} else if (x == "[object Object]")
				tabCell.innerHTML = "manual";

			else
				tabCell.innerHTML = ourData[i][col[j]];
		}
	}

	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
	var divContainer = document.getElementById("showData");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);
	//	document.getElementById("showData").style.color = "#333333";

}
