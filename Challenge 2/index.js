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
        answer = points <= 12 ? `Points: ${points}` : "License Suspended"
    }
    resultValue.innerHTML = answer
}