// Activity 4: Modifying Attributes and Classes 

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let elemented3 = document.querySelector('.image')
elemented3.setAttribute('src','https://www.wallpapertip.com/wmimgs/13-130520_src-free-download-4k-nature-wallpapers-computer-data.jpg')
// Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById('addClass').addEventListener('click',function(){
    let e = document.querySelector('.example')
    e.classList.add('highlight')
});

document.getElementById('removeClass').addEventListener('click',function(){
    let e2 = document.querySelector('.example')
    e2.classList.remove('highlight')
})