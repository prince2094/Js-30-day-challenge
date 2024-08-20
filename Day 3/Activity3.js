// Activity 3: Switch case

// Task 4: Write a program  that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Task 5: Write a Program that uses a switch case to assign grade ('A','B','C','D','F') based on a score and log the grade to the console.
function gradeCalculator(marks){
switch(true){
    case (marks >= 80):
        console.log("Your grade is A")
        break;
    case (marks >= 65):
        console.log("Your grade is B")
        break;
    case (marks >= 55):
        console.log("Your grade is C")
        break;
    case (marks >= 45):
        console.log("Your grade is D")
        break;
    default:
        console.log("Your grade is F")
        break;
}
}
gradeCalculator(75);