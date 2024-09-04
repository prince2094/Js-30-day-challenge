const person = {
    name: 'Prince Sharma',
    age: 25,
    greet: function(){
        console.log(`Good morning ${this.name} and is your age is ${this.age}?`)
    }
}
module.exports =person 