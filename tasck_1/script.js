'use strict'

let text = document.getElementById('text');
let button = document.getElementById('button');
let result = document.getElementById('result');

function showResult(){
	result.innerHTML = text.value.length;
	console.log(result);
}

button.addEventListener('click',showResult);
