// Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

document.getElementById('itemList').addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
        // Log the text content of the clicked list item
        console.log(event.target.textContent);
    }
});
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.