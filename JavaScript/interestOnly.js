var eventListener = document.getElementById("calculate").addEventListener('click', calculate);

function calculate() {
	var amount = document.getElementById("amount").value;
	var length = document.getElementById("length").value;
	var interest = document.getElementById("interest").value;
	
	console.log(amount + " " + length + " " + interest);
	result = document.getElementById("result").innerHTML = "The interest is " + (amount * length * interest / 100);
}


function myFunction(){
	console.log("test aswjdegn");
}