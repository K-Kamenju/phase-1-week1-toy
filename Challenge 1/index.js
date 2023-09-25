
const studentMarks = document.getElementById("studentMarks")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

calculate.addEventListener ("click", studentGrade)

function studentGrade() {
    const marks = studentMarks.value
    let grade 
    if (marks >= 80 && marks <= 100) {
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
        grade = "PLease note that the input should be between 0 and 100"
    }
    results.innerHTML = `${grade}`
}