// function showFullName() {
// 	console.log(this.firstName + " " + this.lastName);
// }

// var user = {
// 	firstName : "Vasily",
// 	lastName : "Petrov"
// }

// showFullName.call(user);




//Это называется «одалживание метода» (на англ. method borrowing)

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.showFullName = function() {
		console.log(this.firstName + " " + this.lastName);
	}
}

var Oles = new User('Oles', 'Gergun');


var Vasily = {
	firstName : "Vasily",
	lastName : "Petrov"
}

Oles.showFullName.call(Vasily); // Vasily Petrov