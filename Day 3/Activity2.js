// Activity 2: Nested if-Else statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statments.
 let num1 = 20;
 let num2 = 69;
 let num3 = 78;
 if (num1 > num2){
    if(num1 > num3){
        console.log("largest of three number is " , num1)
    }
    else{
        console.log("largest of three number is " , num3)
    }
 }
 else{
    if(num2 > num3){
        console.log("The largest of three number is ", num2)
    }
    else{
        console.log("The largest of three number is ", num3)
    }
 }