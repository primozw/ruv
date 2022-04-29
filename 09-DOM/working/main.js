'use strict';


const btn1 = document.getElementById('btn-1');

// LIVE COLLECTION
const colorBtns = document.getElementsByClassName('color-btn');

for (const btn of colorBtns) {
  //console.log(btn);
}

// NON-LIVE COLLECTION
const colorBtns2 = document.querySelectorAll('.color-btn');
console.log(colorBtns2)

// you can use forEach method with nodeList
colorBtns2.forEach(e => console.log(e))


// Odstrani prvi element
btn1.remove()
console.log(colorBtns) // 2 elementa
console.log(colorBtns2) // 3 elementi

// Neposredno spreminjanje CSS lastnosti
const h1 = document.querySelector('h1');
h1.style.color = 'black';
h1.style.textShadow = '5px 5px 0 #fff';

// Posredno spreminjanje CSS lastnosti z dodeljevanjem razredov 
h1.classList.add('active')