// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeat(func, num){
    for(let i = 0; i < num; i++){
        func();
    }
}
// Example usage:
repeat(() => console.log("Hello"), 5);

// Task 10: Write a higher-order function that takes two  functions and a value,  applies the first fuctionto the first function to the value, and then applies the second function to the result.
function apply(func1, func2, value){
    return func2(func1(value));
}
// Example usage:
console.log(apply(Math.sqrt, Math.abs, -100)); // 10