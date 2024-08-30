// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
const task1 = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve('Task 1 is complete')
    },1000)
})

const task2 = new Promise (function (resolve,reject){
    setTimeout(function(){
        resolve('Taks 2 is complete')
    },3000)
})
const task3 = new Promise (function (resolve,reject){
    setTimeout(function(){
        resolve('Taks 3 is complete')
    },2000)
})

Promise.all([task1,task2,task3]).then(function(result){
    console.log(result)
})
// Task 9: Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([task1,task2,task3]).then(function(result){
console.log(result);
}).catch(function(error){
    console.log(error);
    
})