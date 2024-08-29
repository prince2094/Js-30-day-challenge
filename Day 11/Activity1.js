// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after 2 - second timeout and log the message to the console.
const promiseOne = new Promise(function(resolve , reject){
  setTimeout(() => {
    resolve("Hello world")
    
  }, 2000);
})
promiseOne.then(function(message){
  console.log(message);
  
  console.log("Resolve after 2 second");
  
})
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promiseTwo = new Promise(function(resolve,reject){
  setTimeout(() => {
    let error = true
    if(!error){
      resolve("There is no error")
    }
    else{
      reject("there is an error ")
    }
  }, 2000);
})
promiseTwo.then(function(message){
  console.log(message);
  
}).catch(function(error){
  console.log(error);
  
})