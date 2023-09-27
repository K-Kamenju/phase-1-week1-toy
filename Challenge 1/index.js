// the first step is calling the data from the html file into the Js file by get the elements through id
const studentMarks = document.getElementById("studentMarks")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

calculate.addEventListener ("click", studentGrade)

function studentGrade() {
    const marks = studentMarks.value
    let grade 
    if (marks >= 80 && marks <= 100) { //  in the function below i have used the && AND operator to pass two conditions within the if statement. If it passes the first, the and operator will have it refer to the second
        grade = "A"
    } else if (marks >= 60 && marks <= 79) {
        grade = "B"
    } else if (marks >= 50 && marks <= 59) {
        grade = "C"
    } else if (marks >= 40 && marks <= 49) {
        grade = "D"
    } else if (marks < 40 && marks >= 0) {
        grade = "E"
    } else {
        grade = "PLease note that the input should be between 0 and 100" //  this is added incase the user inputs a string or a negative number
    }
    results.innerHTML = `${grade}`
}