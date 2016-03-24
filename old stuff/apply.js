// приклад класичної передачії ф-ції: в ф-цію додається своя фіча 

function hello(name, surname, age) {
	"use strict";
	console.log(`Мене звати ${name}.`);
}

_hello = hello;
hello = function(a,b,c) {
	console.log(a,b,c);
	_hello.apply(this, arguments);
} 



hello('Олесь', 'Гергун', 26);