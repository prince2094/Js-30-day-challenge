// Activity 1: Creating and Exporting Modules
// Task 1: Create a module theat exports a function to add two numbers. import and use this module in another script.
const add = require('./modules/add.js');
console.log(add(2,3))
// Task 2: Create a module that exports an object representing a person with properties and methods. import and use this module in another script 
const person = require(`./modules/person.js`)
console.log(person.name)
console.log(person.greet())
