// Activity 4: Array Iteration 

// Task 10: Use a for loop to iterate over the array and log each element to the console.

let myArray = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < myArray.length;i++){
    console.log(`Element at ${i} index is ${myArray[i]}`)
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

myArray.forEach(function(nums) {
    console.log(nums)
})