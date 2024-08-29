// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is even `)
    }
    else{
        console.log(`${num} is odd `)
    }
}
checkEvenOrOdd(8)

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num){
    return num * num;
}
console.log(square(9))