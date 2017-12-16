'use strict'

let second = document.getElementById('second');
let arr = ['first_img.jpg', 'second_img.jpg', 'third_img.jpg'];

arr.forEach((item)=>{
	let img = document.createElement('img');
	img.src = item;
	second.appendChild(img);
})
