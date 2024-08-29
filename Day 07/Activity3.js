// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book object), and log the library object to the conosle.
const library = {
    name : "Delhi Public library",
    books :[
        {
            title : "Eat that frog",
            author : "Brian Tracy",
            year : 2001
        },
        {
            title : "The power of habit",
            author : "Charles Duhigg",
            year : 2012
        },
        {
            title : "The Atomic Habit",
            author : "James Clear",
            year : 2018
        }
    ]
}
console.log(library)

// Task 6: Access and log the name of the library and the titles of all the books in the library

console.log(`Name of the library is ${library.name}`)
library.books.forEach(book =>{
    console.log(`title of the book is ${book.title}`)
})