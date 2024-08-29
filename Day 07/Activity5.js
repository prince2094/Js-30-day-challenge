// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const book = {
    title : "Eat that frog",
    author : "Brian Tracy",
    year : 2001
}
for (let x in book){
    console.log(`${x} : ${book[x]}`)
}

// Task 9: Use Object.keys() and Object.values methods to log all the keys and values of the book object.

let keys = Object.keys(book);
console.log(`Keys of the objects : ${keys}`)
let values = Object.values(book)
console.log(`Values of the objects : ${values}`)