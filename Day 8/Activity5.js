// Activity 5: Enhanced Object Literals 

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let name = "Prince Sharma"
let age = 20
let country = "India"
let selfDetail = function(){
        return `Name is ${this.name}, age is ${this.age} and country is ${country}`
 }

 let person = {
    name,age,country,selfDetail
 }
console.log(person)
// Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName1 = "firstName"
let propName2 = "lastName"
let propName3 = "age"

const user = {
    [propName1] : "Prince",
    [propName2] : "Sharma",
    [propName3] : 20
}
console.log(user)