// the first step is calling the data from the html file into the Js file by get the elements through id

const speedLimit = document.getElementById("speedLimit")
const calculateSpeed = document.getElementById("calculateSpeed")
const resultValue = document.getElementById("resultValue")

calculateSpeed.addEventListener("click", calculationOfSpeed)


function calculationOfSpeed() {
    let speed = speedLimit.value
    let answer 
    if (speed <= 70) {
        answer = "Ok"
    } else {
        const points = Math.floor((speed - 70)/5)
        answer = points <= 12 ? `Points: ${points}` : "License Suspended" //our expected result can either be points or license being suspended depending on the number of points accrued. In order for us to get this condition i used a tenary expression which evaluates the number of points to see if it returns points or license suspendion
    }
    resultValue.innerHTML = answer
}