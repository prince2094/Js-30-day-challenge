// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log message in the try, catch, and finally blocks to observe the execution flow.

function executionTask(){
    try{
        let result = 10/0;
        if(result === Infinity){
            console.log("Inside try block: Starting the task...");
            throw new Error("Division by zero detected!")
        }
        console.log("Inside try block : Task is completed successfully");
        
    }
    catch(error){
        console.log("Inside catch block : An error occurred : ",error.message);
    }
    finally{
        console.log("Inside finally block : Task is complete");
        
    }
}
executionTask()