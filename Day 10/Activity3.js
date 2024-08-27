// Keyboard Events
// Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('inputText').addEventListener('keydown',function(e){
    console.log("key pressed",e.key);
})
// Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('inputText').addEventListener('keyup',function(e){
    let currentValue = document.getElementById('inputText').value;
    document.getElementById('displayText').textContent = currentValue;

})