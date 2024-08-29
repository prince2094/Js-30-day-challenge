// Activity 2: Destructuring 

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const num  = [10,20,30,40,50]
let [num1,num2] = num
console.log(`first number in the num array is ${num1}`)
console.log(`second number in the num array is ${num2}`)
// Task 4: Use object destructing to extract the title and author from a book object and log them to the console
const book = {
    title : "Eat that frog",
    author : "Brian Tracy",
    year : 2001
}
let {title,author} = book
console.log(`Title of the book is ${title} and author name is ${author}`)
