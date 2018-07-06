//console.log(".js linked");

function todaysTime() {

	var gettingDate = new Date();
	var _date = gettingDate.getDate();
	var _day = gettingDate.getDay();
	var _month = gettingDate.getMonth() + 1;
	var _year = gettingDate.getFullYear();


	var hours = gettingDate.getHours();
	var mins = gettingDate.getMinutes();
	var seconds = gettingDate.getSeconds();

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	var date = "The date is " + _date + "/" + _month + "/" + _year;
	var time = "The current Time is " + hours + ":" + mins + ":" + seconds;

	console.log(date + " --- " + time);

	var actualDay;
	switch (_day) {
		case 0:
			actualDay = "Sunday";
			break;
		case 1:
			actualDay = "Monday";
			break;
		case 2:
			actualDay = "Tuesday";
			break;
		case 3:
			actualDay = "Wednesday";
			break;
		case 4:
			actualDay = "Thursday";
			break;
		case 5:
			actualDay = "Friday";
			break;
		case 6:
			actualDay = "Saturday";
			break;
		default:
			actualDay = "Technical error";
	}

	document.getElementById("display").innerHTML = "Today is " + actualDay + ". " + date + ". " + time;
}
todaysTime();

setInterval(todaysTime, 1000);
