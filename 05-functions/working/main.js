'use strict';

/**
 * Funkcije
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions 
 */

/*
1. Zapišite funkcijo ki vrne pozdrav na podlagi podanega imena. Za obliko uporabite deklaracijo funkcije (function declaration).
*/

let g = 1;

console.log(dispName('Miha'));

function dispName(name = 'Primož'){
  let l = 2;
  console.log(g)
  return `Hello ${name}!`;
  // newFunction()
  // function newFunction(){

  // }
}

// console.log(l)
console.log(dispName());

/*
2. Preoblikujte zapis, tako da bo funkcija definirana kot izraz (function expression).
*/

var d = 1

const dispName2 = function(name){
  var d = 3
  console.log(d)
  return `Hello ${name}!`;
  
}
console.log(d)


/*
3. Zapišite funkcijo za izračun stroškov prevoza. Vhodni parametri: razdalja, poraba (na 100 km), cena goriva (na liter).
4. Definirajte privzete vrednosti vhodnih parametrov: poraba in cena goriva
*/

function costCalculator(distance, poraba = 6.5, price = 1.325){
  return ((poraba / 100) * distance ) * price
}
console.log(`${Math.round(costCalculator(135, 7.5))} EUR`)



function greetingsGenerator(greeting='Hello'){
  let test = 1

  return function(name){
    return `${greeting} ${name}!`
  }
}

const pozdraviSerbus = greetingsGenerator('Serbus');
const pozdraviHello = greetingsGenerator('Hello');

console.log(pozdraviHello('Miha'))
console.log(pozdraviHello('Peter'))

console.log(pozdraviSerbus('Miha'))
console.log(pozdraviSerbus('Peter'))


/*
5. Ustvarite funkcijo, ki bo služila za štetje avtomobilov (counter). Funkcija mora imeti naslednje lastnosti:
– vsakič ko pokličemo funkcijo se bo števec povečal za ena in vrnil skupno število avtomobilov
– števca ne moremo spremeniti – skupno število avtov je odvisno samo od tega kolikokrat smo poklicali funkcijo
*/



