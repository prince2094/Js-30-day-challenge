// Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://invalid-url.example.com/data')
.then(respone => {
    if(!respone.ok){
        throw new Error(`Invalid URL ${respone.status}`)
    }
    return respone.json
}).then(data =>{
    console.log(data);
    
}).catch(function(error){
    console.log(error);
})

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message to the console.
async function fetchData() {
    try {
      // Step 2: Attempt to fetch data from an invalid URL
      const response = await fetch('https://invalid-url.example.com/data');
  
      // Step 3: Check if the response is not ok (e.g., 404 or other HTTP errors)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Step 4: Attempt to parse the response as JSON
      const data = await response.json();
      console.log('Data received:', data); // This won't run since the URL is invalid
  
    } catch (error) {
      // Step 5: Handle the error and log an appropriate message to the console
      console.error('Fetch request failed:', error.message);
    }
  }
  
  // Step 6: Call the async function to execute the fetch request
  fetchData();