// Activity 3: Spread and Rest Operators 
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let q1 = ["Jan","Feb","Mar","Apr"]
let q2 = ["May","Jun","Jul","Aug"]
let q3 = ["Sep","Oct","Nov","Dec"]

let year = [...q1,...q2,...q3]
console.log(year)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...theargs){
    let total = 0;
    for(let agrs of theargs){
        total += agrs;
    }
    return total;
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5,6,7,8,9,10))