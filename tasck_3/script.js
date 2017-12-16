'use strict'

let text2 = document.getElementById('text');
let button2 = document.getElementById('button');
let result2 = document.getElementById('result');

//     https://www.site.ua

function showResult2(){
	let result;
	let url = text2.value;
	result = url.split('/');
	result2.innerHTML = result[2];
}

button2.addEventListener('click',showResult2)
