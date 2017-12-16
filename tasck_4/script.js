'use strict'

let text3 = document.getElementById('text');
let button3 = document.getElementById('button');
let result3 = document.getElementById('result');

//     https://www.site.ua

function showResult(){
	let result;
	let url = text3.value;
	let index = url.indexOf('site');
	result = url.substring(index);
	result3.innerHTML = result;
}

button3.addEventListener('click',showResult)
