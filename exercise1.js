"use strict";

function delay(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

delay(2000)
	.then(() => alert("Hello!"))