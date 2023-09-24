// code begins here

let speed

function speedDetector(speed) {
    if (speed <= 70) {
        return "Ok"
    } else {
        const points = Math.floor((speed - 70)/5)
        return points <= 12 ? `Points: ${points}` : "License suspended"
    }
}

console.log(speedDetector(79))