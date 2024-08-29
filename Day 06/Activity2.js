// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let myArray = [1,2,3,4,5]
myArray.push(6)
console.log(`After push method ${myArray}`)

// Task 4: Use the pop method to remove the last number from the array and log the updated array.

myArray.pop()
console.log(`After pop method ${myArray}`)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

let firstNumber = myArray.shift()
console.log(`After shift method ${myArray}`)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
myArray.unshift(firstNumber)
console.log(`After unshift method ${myArray}`)
