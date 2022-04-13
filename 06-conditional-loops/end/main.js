'use strict';

const model = "mini";
const consumption  = 6.5;

let a = 1;

if (a == 0) {
  console.log('Pogoj je resničen')
} else if (a == 1) {
  console.log('Vrednost 1')
}else {
  console.log('Pogoj ni resničen')
}

if (a == '1'){
  console.log('test')
}

// Falsy values: 
// false, null, undefined,’’, 0, NaN

if (1) {
  // Ta koda se ne bo nikoli izvedla
}

console.log(Boolean(''))




// 1. Napišite funckijo, ki na podlagi podane porabe avtomobila vrnila ekološki razrad:
// – če je poraba manjša ali enaka 4 je razred 1
// – če je poraba manjša ali enaka 7 je razred 2
// – če je poraba manjša ali enaka 12 je razred 3
// – če je porava večja od 12 je razred 4
function getEcoClass(c){
  let ecoClass = null;
  if (c <= 4 ) {
    ecoClass = 1
  } else if (c <= 7){
    ecoClass = 2
  } else if (c <= 12){
    ecoClass = 3
  } else {
    ecoClass = 4
  }
  return ecoClass
}
const ecoClass = getEcoClass(14)
console.log(ecoClass)


function getEcoClass2(c){
  if (c <= 4 ) return 1
  if (c <= 7) return 2
  if (c <= 12) return 3
  return 4
}
const ecoClass2 = getEcoClass2(14)
console.log(ecoClass2)

// 2. Napišite funkcijo, ki na podlagi modela vrne znamko modela:
// mini --> BMW
// fabia --> Skoda
// karoq --> Skoda
// v60 --> Volvo
// ostalo --> Unknown

function getBrand(model){
  let brand
  switch (model){
    case 'mini':
      brand = 'BMW'
      break;
    case 'fabia':
    case 'karoq':
      brand = 'Skoda'
      break;
    case 'v60':
      brand = 'Volvo'
      break;
    default:
      brand = 'Unknown'
  }
  return brand
}
console.log('Manufacturer:', getBrand(model))


// 3. Napišite funkcijo, ki izpiše vsa cela števila od 1 do podanega parametra:
// disp(5) --> 1 2 3 4 5
// a) uporabite for zanko
// b) uporabite while zanko

function disp(length){
  for (let i = 1; i <= length; i++) {
    console.log(i)
  }
}
disp(10)

// while
function disp2(length){
  let i = 1;
  while (i <= length) {
    console.log(i)
    i++
  }
}
disp2(2)