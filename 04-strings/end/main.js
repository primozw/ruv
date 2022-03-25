'use strict';

/**
 * Strings (znakovni niz)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
const brand = 'BMW';
const model = 'Mini';
const serial = '2015-5678765444-160R'; // leto - število izdelanih avtov – oznaka motorja

// Združite ime proizvajalca in modela v novo spremenljivko – uporabite operator + ali dobesedno predlogo (template literals)
let dispInfo = brand + ' ' + model;
let dispNew = `${brand} ${model}`;
let dispBrandNew = 'Ta avto je \n super kul'
console.log(dispBrandNew);

// Izpišite število znakov serijske številke
console.log(dispNew.length);

// Izpišite zadnji znak serijske številke
console.log(dispNew[dispNew.length - 1]);

// Shranite leto proizvodnje v novo spremeljivko
let year = serial.slice(0,4)
console.log(year);

// Določite starost na avta
const age = new Date().getFullYear() - year;
console.log(age);

// Shranite oznako motorja - zadnje 4 znake v novo spremenljivko
const engine = serial.slice(-4);

// Izpišite število izdelanih avtov v istem letu
let seqNumber = serial.slice(serial.indexOf('-') + 1, serial.lastIndexOf('-'));
console.log('Število izdelanih avtomobilov:', seqNumber);

// Izpišite ime proizvajalca in modela v minuskulah
console.log(brand.toLocaleLowerCase());

// Izpišite ime proizvajalca in modela v majuskulah
console.log(brand.toUpperCase());