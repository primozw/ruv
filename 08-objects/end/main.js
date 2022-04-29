'use strict';

/**
 * Objects (objekti)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */
// Ustvarite nov objekt, ki bo bo vseboval lastnosti določenega avta (proizvajalec, model, letnica izdelava, barva ...)




const mini = {
  company: 'BMW',
  year: 2020,
  color: 'Blue',
  feature: ['ABS', '4x4', 'klima'],
  model: 'Mini',

  // Objektu dodajte funkcijo getDesc (metodo), ki vrnila znakovni niz sestavljen iz  proizvajalca in modela avta 
  getDesc: function(){
    return `${this.company} ${this.model}`
  },
  test: function(){
    function test2(){
      return this.year
    }
    console.log(test2())
  }
}

// Izpišite poljubno lastnost avta
console.log(mini.company) // dot notation
console.log(mini['company']) // bracket notation
console.log(mini.feature[1]) // izpiši 4x4

// Spremenite poljubno lastnost avta
mini.color = 'Red';

const desc = mini.getDesc();
console.log(desc);

// Kontekst izvajanja
// const getDesc2 = mini.getDesc
// const desc2 = getDesc2();
// console.log(desc2)
// mini.test()

// Ustvarite graditeljsko funkcijo (constuctor function) imenovano Car za ustvarjanje objekta, ki ima iste lastnosti in metode kot prej ustvarjen objekt 
function Car(company, model, year, color, features){
  this.company = company;
  this.model = model;
  this.year = year;
  this.color = color;
  this.features = features;
//   // Objektu dodajte funkcijo setSerial (metodo), za ustvarjanje serijske številke, ki je sestavljena iz leta in naključnega števila: npr. 2015-32435435
// // – vhodni parameter funcije naj bo dolžina naključnega števila - število števk
// // – funkcija pa naj doda serijsko številko objektu kot njegovo lastnost
//   this.setSerial = function(length){
//     this.serial = `${this.year}-${Math.floor(Math.random() * 10**length)}`
//   }
}

// Funkcijo dodajte prototipu graditeljske funkcije
Car.prototype.setSerial = function(length){
      this.serial = `${this.year}-${Math.floor(Math.random() * 10**length)}`
}

// Z uporabo graditeljske funkcije ustvarite nekaj novih objektov
const fabia = new Car('Skoda', 'Fabia', 2001, 'Silver', ['ABS', 'klima']);
fabia.setSerial(10)
console.log(fabia)

const tesla = new Car('Tesla', 'x', 2020, 'Black', ['ABS', 'klima']);
fabia.setSerial(10)
console.log(fabia)


// in JS all primitive data types are wrapped around object, for example strings are wrapped around object which is created with constructor called String
const ime = 'Miha';
console.log(ime.length)
console.log(ime.__proto__)



// Izpišite vse lastnosti ustvarjenih objektov
// Ustvarite kopijo objekta in mu dodajte novo lastnost
