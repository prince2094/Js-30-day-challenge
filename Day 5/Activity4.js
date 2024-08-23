// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(a, b = 10){
    return a * b;
} 
console.log(product(89))

// Task 8: Write a function that takes person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 20){
    return `Hello ${name}, you are ${age} years old.`
}
console.log(greet("Prince"))