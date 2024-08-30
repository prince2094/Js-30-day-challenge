// Activity 4 Fetching Data from an API
// Task 6: Use teh fetch API to get data from a public API and log the resopone data to the console using promises
const baseUrl = 'https://jsonplaceholder.typicode.com/users'
const fetchPromise = fetch(baseUrl)
fetchPromise.then(resopone=>{
    return resopone.json()
})
.then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error);
    
})
// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
async function fetchData(){
    const response = await fetch(baseUrl)
    const data = await response.json()
    console.log(data)
}
fetchData()