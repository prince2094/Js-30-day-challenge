//  Activity 4: Nested loops
// Task 7: Write a progrma to print a pattern using nested for loops:

// *
// **
// ***
// ****
// *****

function pattern(n){
    for (let row = 0; row < n;row++){
        let rowPattern = ""
        for(let col = 0;col < row + 1;col++){
            rowPattern = rowPattern + "*";
        }
        for(let space = 0; space < n-row-1;space++){
            rowPattern = rowPattern + " ";
        }
        console.log(rowPattern)
    }
}
pattern(5);