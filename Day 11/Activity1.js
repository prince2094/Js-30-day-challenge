// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after 2 - second timeout and log the message to the console.
// Creating a promise that resolves after 2 seconds
const promiseResolve = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds!");
    }, 5000);
  });
  
  // Handling the resolved promise and logging the message to the console
  promiseResolve.then((message) => {
    console.log(message);
  });
  
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().