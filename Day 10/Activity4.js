// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();
    // let form = document.getElementById('myForm');
    let formData = new FormData(e.target);
    formData.forEach((value,key) => {
        console.log(key + ': ' + value);
        
    })
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
