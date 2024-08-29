// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

let newElement = document.createElement('div')
newElement.innerHTML = "This is a new div element"
document.body.appendChild(newElement)
newElement.style.backgroundColor = "lightblue"

// Task 4: Create a new li element and add it tol an existing ul list.

let newLi = document.createElement('li')
newLi.innerHTML = "Banana"
document.querySelector('ul').appendChild(newLi)