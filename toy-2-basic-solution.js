// code begins here
// declaring speed with let allows the variable to be reassigned 
let speed

function speedDetector(speed) {
    if (speed <= 70) {
        return "Ok"
    } else {
        const points = Math.floor((speed - 70)/5)
        // using Math.floor because some digits such as 83 are not divisible by 5 we therefore, need to use a method that will round down the answer and not to any side but the lower side since:
        // 83-70= 13/5 = 2.6 and the speed limit is 70. therefore, 83 should return 2 demerit points


        return points <= 12 ? `Points: ${points}` : "License suspended"

        //our expected result can either be points or license being suspended depending on the number of points accrued. In order for us to get this condition i used a tenary expression which evaluates the number of points to see if it returns points or license suspendion
    }
}

console.log(speedDetector(79))