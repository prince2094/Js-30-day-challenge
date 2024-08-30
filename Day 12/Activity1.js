// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throw an error and use a try-catch block to handle the error and log an appropriate message to the console.
function intentionallyError(){
    try{
        throw new Error("This is an intentional error")
    }
    catch(error){
        console.log("An error occurred : ",error.message)
    }
    finally{
        console.log("Error handling is complete");
        
    }
}
intentionallyError()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch blick to handle this error.

function divideNumbers(a , b){
    try{
        if (b===0){
            throw new Error("Cannot divide by zero!")
        }
        let result = a/b
        console.log(result)
    }
    catch(error){
        console.log("An error occurred : ",error.message)
    }
    finally{
        console.log("Division is attempted complete");
        
    }
}
divideNumbers(10,2)
divideNumbers(10,0)