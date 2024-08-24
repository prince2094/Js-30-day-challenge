// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with book's title and year, and log the result of calling this method.
const book = {
    title : "Eat that frog",
    author : "Brian Tracy",
    year : 2001,
    details : function(){
        return `Name of the book is ${this.title} publish on ${this.year}`
    }
}
console.log(book.details())