// Activity 1: Basic Event Handling
// Task 1: Add a click listener to a button that changes the text content of a paragraph.
document.getElementById('text').addEventListener('click',function(e){
    document.getElementById('text').textContent = "Hello World";
})
// Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementById('flower').addEventListener('dblclick', function() {
    let image = document.getElementById('flower');
    let computedStyle = window.getComputedStyle(image).display;

    if (computedStyle === 'none') {
        image.style.display = 'block'; // Show the image
    } else {
        image.style.display = 'none';  // Hide the image
    }
});
