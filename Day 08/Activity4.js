// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.
function product(a, b =  1){
    return a * b
}
console.log(product(2,3))
console.log(product(5))