'use strict';

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// переведёт промис в состояние fulfilled с результатом "result"
		resolve('Hooray!');
	}, 1000);
});

promise
	.then( 
		result => {
			// первая функция-обработчик - запустится при вызове resolve
			alert(`Fullfilled ${result}`);
		},
		error => {
			// вторая функция - запустится при вызове reject
			alert(`Rejected ${error}`);
		} 
	);



//Поліфіл для fetch
function httpGet (url) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = () => {
			if (this.status == 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};
		xhr.onerror = () => reject(new Error('Network Error'));
		xhr.send();
	});
}

httpGet('/some/user.json')
	.then(
		result => alert(`Fullfilled: ${result}`),
		error => alert(`Rejected: ${error}`)
	);