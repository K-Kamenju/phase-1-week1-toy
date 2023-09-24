// code starts here

let marks = 49

function studentMarks() {
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
        return "Please input a numeric value between 0 - 100"
    }
}

console.log(studentMarks())