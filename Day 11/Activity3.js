// Activity Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve to resolve and then logs the resolved value.
const promise4  = new Promise(function (resolve , rejecet){
    setTimeout(function(){
        resolve("This asyncFunction resolve after 1sec")
    },1000)

})
async function asyncFunction(){
    const message = await promise4
    console.log(message)
}
asyncFunction()

// Task 5: Write an async function that handles a rejeted promise using try-catch and logs the error message.
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
          resolve("There is no error")
        }
        else{
          reject("there is an error ")
        } 
    },2000)
})
async function asyncFunction2(){
    try{
        const message = await promise5
        console.log(message);
        
    }
    catch(error){
        console.log("There is an error");
    }
}
asyncFunction2()