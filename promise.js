'use strict';
// http://learn.javascript.ru/promise


// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// переведёт промис в состояние fulfilled с результатом "result"
// 		resolve('Hooray!');
// 	}, 1000);
// });

// promise
// 	.then( 
// 		result => {
// 			// первая функция-обработчик - запустится при вызове resolve
// 			alert(`Fullfilled ${result}`);
// 		},
// 		error => {
// 			// вторая функция - запустится при вызове reject
// 			alert(`Rejected ${error}`);
// 		} 
// 	);



//Поліфіл для fetch
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

function getFile() {
	httpGet('node/files/user.json')
		.then(
			result => {
				alert(`Fullfilled: ${result}`);
				let user = JSON.parse(result);
				return user;
			},
			error => alert(`Rejected: ${error}`)
		)
		.then(
			user => {
				alert(user);
				return httpGet(`https://api.github.com/users/${user.nickname}`);
			}
		)
		.then(
			githubUser => {
				githubUser = JSON.parse(githubUser);
				console.log(githubUser);

				let img = new Image();
				img.src = githubUser.avatar_url;
				img.className = "promise-avatar";
				document.body.appendChild(img);
			}
		)

}