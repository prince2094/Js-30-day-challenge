// Activity 5: Combinig conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("Leap year");
    }
    else{
        console.log("Not a leap year");
    }
}
isLeapYear(2020);
isLeapYear(2023)