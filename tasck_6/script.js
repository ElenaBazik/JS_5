'use strict'

let unicode = document.querySelector('#unicode');
console.log(unicode);
function e (){
	let value = unicode.value;
	let result6 = document.querySelector('#result');
	result6.innerHTML = value.charCodeAt(value);
	console.log(result);
};
unicode.addEventListener('change',e);
