'use strict';

/**
 * Strings (znakovni niz)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
const brand = 'BMW';
const model = 'Mini';
const serial = '2015-78345-160R'; // leto - število izdelanih avtov – oznaka motorja

// Združite ime proizvajalca in modela v novo spremenljivko – uporabite operator + ali dobesedno predlogo (template literals)
let dispInfo = brand + ' ' + model;
let dispNew = `${brand} ${model}`;
let dispBrandNew = 'Ta avto je \n super kul'
console.log(dispBrandNew);

// Izpišite število znakov serijske številke
// Izpišite zadnji znak serijske številke
// Shranite leto proizvodnje v novo spremeljivko
// Določite starost na avta
// Shranite oznako motorja - zadnje 4 znake v novo spremenljivko
// Izpišite število izdelanih avtov v istem letu
// Izpišite ime proizvajalca in modela v minuskulah
// Izpišite ime proizvajalca in modela v majuskulah