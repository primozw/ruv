'use strict';

const btn1 = document.querySelector('#btn-1');

btn1.addEventListener('click', ()=>console.log('Click na btn!'), true)

window.addEventListener('click', ()=>console.log('Click na window!'), true)

const title = document.querySelector('h1');
console.log(title.innerText)
title.innerText = 'Dobro jutro!';
title.innerHTML = '<em>Dobro</em> jutro!';


const li = document.createElement('li');
const textLi = document.createTextNode('Cadet Blue');
li.append(textLi)

//document.querySelector('.color-list').prepend(li)
document.querySelector('.color-list').insertAdjacentElement('afterbegin', li)

// 1. Spremenite barvo avta ob kliku na posamezen gumb – barva je določena z imenom gumba

// izberi path znotraj svg-ja z id barva
const carColor = document.getElementById('barva');

// izberi vse li elemente
const colorsBtn = document.querySelectorAll('.color-list li');

colorsBtn.forEach(el => {
  el.addEventListener('click', function(event){
    // carColor.style.fill = this.innerText.replace(/ /g, '');
    carColor.style.fill = event.target.innerText.replace(/ /g, '');
    console.log(event)

    const activeBtn = document.querySelector('li.active');
    activeBtn.classList.remove('active');
    this.classList.add('active');
  })
})


// 2. Animirajte naslov, tako da bo prikazan postopoma črko za črko

// Transform to array
let greetings = title.innerText.split('');

// Remove init text and replace it with wrap characters
title.innerHTML = '';
greetings.forEach(char => {
  const span = document.createElement('span');
  span.innerText = char;
  title.appendChild(span)
})

// Animate Characters
const characters = title.querySelectorAll('span');
characters.forEach((e, i) => {
  setTimeout(() => {
    e.classList.add('active');
    if (i === characters.length - 1){
      colorsBtn.forEach(e => e.style.opacity = 1)
    }
  },  (i + 1) * 250 )
})

