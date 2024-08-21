// Do...WHile Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let i =1;
do{
    console.log(i);
    i++;
}
while(i<=5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
function factorial(n){
    let i = 1;
    let fact = 1; 
    do{
        fact = fact * i
        i++;
    }
    while(i <=n);
console.log(fact);
}
factorial(5);