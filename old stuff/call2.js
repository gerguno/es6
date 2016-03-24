var user = {
	firstName: "Василий",
	lastName: "Петров",
	patronym: "Иванович"
}

function showFullName(firstPart, secondPart, thirdPart) {
	console.log( this[firstPart] + " " + this[secondPart] + " " + this[thirdPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'patronym', 'lastName') // "Василий Иванович Петров"