//  Activity 2: Function Expression 

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

let max = function(a, b){
    if(a > b){
        console.log(`${a} is greater than ${b}`)
    }
    else{
        console.log(`${b} is greater than ${a}`)
    }
}
max(5, 10)

// Task 4: Write a function expression to concatenate two string and return the result.
let concat = function(str1, str2){
    return str1 + " "+ str2
}
console.log(concat("Prince","Sharma"))

