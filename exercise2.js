"use strict";

var urls = [
	'/node/files/user.json',
	'/node/files/guest.json'
];
var results = [];


// Parallel loading

// function httpGet (url) {
// 	return new Promise((resolve, reject) => {
// 		var xhr = new XMLHttpRequest();
// 		xhr.open('GET', url, true);
// 		xhr.onload = function() {
// 			if (this.status == 200) {
// 				resolve(this.response);
// 				results.push(JSON.parse(this.response));
// 			} else {
// 				var error = new Error(this.statusText);
// 				error.code = this.status;
// 				reject(error);
// 			}
// 		};
// 		xhr.onerror = function() {
// 			reject(new Error('Network Error'));	
// 		} 
// 		xhr.send();
// 	});
// }


// Promise.all( urls.map(httpGet) )
//   .then(console.log(results))


// Serial loading

function httpGet (url) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function() {
			if (this.status == 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};
		xhr.onerror = function() {
			reject(new Error('Network Error'));	
		} 
		xhr.send();
	});
}

let chain = Promise.resolve();

// в цикле добавляем задачи в цепочку
urls.forEach(function(url) {
  chain = chain
    .then(() => httpGet(url))
    .then((result) => {
      results.push(result);
    });
});

// в конце — выводим результаты
chain.then(() => {
  alert(results);
});
