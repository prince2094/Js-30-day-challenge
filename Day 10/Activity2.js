// Activity 2: Mouse Events 

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('box').addEventListener('mouseenter',function(){
    let box = document.getElementById('box')
    console.log("mouse in");
    
    box.style.backgroundColor = 'red'
})
// Task 4: Add a mouseout event listener to an element that changes its background color back.
document.getElementById('box').addEventListener('mouseout',function(){
    let box = document.getElementById('box')
    console.log("mouse out");
    
    box.style.backgroundColor = 'white'
})