// Event Handling

// Task 9: Add a click event listner to a button that changes the text content of a paragraph.

document.getElementById('changeText').addEventListener('click',function(){
    let e = document.querySelector('.example2')
    e.textContent = "This is a new text"
})

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('colorBox').addEventListener('mouseover', function() {
    // Change the border color on mouseover
    this.style.borderColor = 'red';
});

// Optionally, you can add a mouseout event to revert the border color
document.getElementById('colorBox').addEventListener('mouseout', function() {
    // Revert the border color when the mouse leaves
    this.style.borderColor = 'black';
});