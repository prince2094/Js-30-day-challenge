// Activity 3:  Custom Error Objects
// Task 4: Crate a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class MyCustomError extends Error{
    constructor(message){
        super(message)
        this.name = "MyCustomError";
    }
}

function riskyFunction(){
    const randomNumber = Math.floor(Math.random()*2)
    if(randomNumber===1){
        throw new MyCustomError("An error occurred in riskyFunction")
    }
    else{
        console.log("riskyFunction executed successfully")
    }

}

try{
    riskyFunction()
}
catch(error){
    if(error instanceof  MyCustomError){
        console.log("Cought custom error : ",error.message);
    }
    else{
        console.log("Cought an error : ",error.message);
    }
}
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty ) and throws a custom error if the validation fails. Handles the custom  error using a try-catch block.

class ValidaeError extends Error{
    constructor(message){
        super(message)
        this.name = "ValidateError"
    }
}
function inputValidate(input){
    if(input ===""){
        throw new ValidaeError("Input cannot be empty")
    }
    console.log("input in not empty it is correct");
    
}
try{
    inputValidate("")
}
catch(error){
    if(error instanceof ValidaeError){
        console.log("Caught custom error : ",error.message);
    }
    else{
        console.log("Caught an error : ",error.message);
    }
}