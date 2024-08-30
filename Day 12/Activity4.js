// Activity 4: Error Handling in Promise
// Task 6: Create a promise that randomly resolve or rejecs. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise(function(resolve,reject){
    const randomNumber = Math.floor(Math.random()*2);
    if(randomNumber === 1){
        resolve('Success')
    }
    else{
        reject('Failure')
    }
})
randomPromise.then(function(message){
    console.log(message);
    
}).catch(function(message){
    console.log(message);
    
})

// Task 7: Use try-catch within an async function to handle errors form a promise that randomly resolve or rejects, and log the error message.

async function errorHandling() {
    try{
        const message = await randomPromise
        console.log(message);
        
    }
    catch(error){
        console.log(error);
    }
    
}
errorHandling()
