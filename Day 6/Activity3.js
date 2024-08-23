// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let myArray = [1,2,3,4,5,6,7,8,9,10]

let doubledArray = myArray.map( (num) => num * 2 )
console.log(doubledArray)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenNum = myArray.filter((num) => num % 2 == 0)
console.log(evenNum)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let total = myArray.reduce((acc,num) => acc + num , 0)
console.log(total)