// Activity 2: Object Methods 
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book = {
    title : "Eat that frog",
    author : "Brian Tracy",
    year : 2001,
    // details : function(){
    //     return `${this.title} by ${this.author}`
    // }
}
book.details = function(){
    return this.title + " by " + this.author
}
console.log(book)
console.log(book.details())
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.yearUpdate = function(newYear) {
    this.year = newYear
}

book.yearUpdate(2000)
console.log(`updated year ${book.year}`)

