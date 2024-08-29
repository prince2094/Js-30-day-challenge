// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.

const promise3 = new Promise(function(resole,resject){
    setTimeout(function(){
        resole("Promise 3 resolved")
    },2000)
})
promise3.then(function(message){
    console.log(message)
    return new Promise(function(resole,resject){
        setTimeout(function(){
            resole("Dat processe")
        },2000)
    })
}).then(function(message){
    console.log(message)
    
})