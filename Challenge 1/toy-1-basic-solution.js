// code starts here
// declaring speed with let allows the variable to be reassigned
let marks


//  in the function below i have used the && AND operator to pass two conditions within the if statement. If it passes the first, the and operator will have it refer to the second

function studentGrades(marks) {
    if (marks > 79 && marks <= 100) {
        return "A"
    } else if (marks > 59 && marks < 80) {
        return "B"
    } else if (marks > 49 && marks < 60) {
        return "C"
    } else if (marks > 39 && marks < 50) {
        return "D"
    } else if (marks < 40 && marks > 0) {
        return "E"
    } else {
        //  this is added incase the user inputs a string or a negative number
        return "Please input a numeric value between 0 - 100"
    }
}

console.log(studentGrades())
