'use strict';

/**
 * Arrays (polja)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const serial = '2015-7834-160R';

// Definirajte polje barv, polje naj vključuje naslednje barve: Red, DarkTurquoise, Teal, DarkSalmon, DeepPink
const colors = [ 'Red', 'DarkTurquoise', 'Teal', 'DarkSalmon', 'DeepPink']
console.log(colors)

// Iz serijske številke ustvarite polje posameznih vrednosti
const serialValues = serial.split('-');
console.log(serialValues)

// Shranite letnico izdelave v samostojno spremneljivko
const year = serialValues[0];


// Arrays are copied by reference
let a = 1;
let b = a;
a = 2
console.log('b:', b);
console.log('a:', a);

const colors2 = colors;
colors2[0] = 'Blue'
console.log(colors[0])
console.log(colors2[0])


// Dodajte barvo White na konec seznama
colors.push('White');
console.log(colors);

//Dodajte barvo Crimson na začetek seznama
colors.unshift('Crimson');
console.log(colors);

// Odstranite zadnjo barvo na seznamu
console.log(colors.pop());

// Nadomestite barvo, ki se nahaja na sredini seznama s poljubno barvo
colors.splice(Math.floor(colors.length/2), 1, 'Indigo');
console.log(colors)

// Združite vse barve v znakovni niz. Barve naj bodo ločene z vejico
const colorsList = colors.join(', ')
console.log(colorsList)

// Zamenjajte barvo Red z barvo DarkCyan
colors.splice(colors.indexOf('Red'), 1, 'DarkCyan');
console.log(colors);

// Preverite ali je Teal na seznamu barv
console.log('Na seznamu je Teal barva:', colors.includes('Teal'));

const t = colors.find(function(e){
  return e === 'DarkCyan'
})

// Razvrstite barve po abecednem vrstnem redu
console.log(colors.sort())

// Razvrstite barve v nasprotnem abecednem redu
colors.sort(function(a, b){
  if (b>a) {
    return 1
  } else if(b<a){
    return -1
  } else {
    return 0
  }
})
console.log(colors);


const y = [1,2,4,7,78].map(function(e, i, a){
  // if(i === 2){
  //   return 3
  // } else {
  //   e
  // }
  return (i === 2) ? 3 : a

})
console.log(y)

const o = [1,2,4,989,78]
const z = o.map(function(e, i, a){
  a[0] = 6
  return a

})
console.log(z)

// Omenjene barve definirajte v barvnem prostoru HSL in vrednosti zapište znotraj polja imenovanega hslColors

const hslColors = [
  'hsl(348, 83%, 58%)',
  'hsl(180, 100%, 27%)',
  'hsl(181, 100%, 41%)',
  'hsl(180, 100%, 25%)'
];

// Za vsako barvo izpišite njeno ime in pripadajočo svetlost barve
hslColors.forEach(function(el, i){
  const l = el.slice(el.lastIndexOf(' '), -1);
  console.log(colors[i], l);
})

// Izbrišite barve, ki imajo svetlost večjo od 50%
const selectedColors = hslColors.filter(function(el){
  const l = parseInt(el[2].slice(0, -1));
  return l <= 50
})
console.log(selectedColors);


// Dodeljevanje reference in kopiranje
// Kopirajte polja barv v novo neodvisno spremenljivko 
const p1 = [1, 2, 3]
const p2 = [...p1]
const p3 = p1

p2[0] = 0
p3[0] = 0
console.log(p1, p2, p3)



