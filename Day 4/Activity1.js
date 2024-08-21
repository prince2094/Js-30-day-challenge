// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
function printNumbers(n){
    for(let i = 1; i<=n;i++){
        console.log(i);
    }
}
printNumbers(10);
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
function multiplicationTable(n){
    for(let i = 1; i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
}
multiplicationTable(5)