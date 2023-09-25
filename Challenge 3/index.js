// the first step is calling the data from the html file into the Js file by get the elements through id

const grossSalaryHtml = document.getElementById("grossSalary")
const calculateNetPay = document.getElementById("calculateNetPay")

const taxResults = document.getElementById("taxResult")

calculateNetPay.addEventListener("click", calculate)



function calculate(){
    const grossSalary = grossSalaryHtml.value
    // we run this code above for our grossSalary to be the value that will be input in our browser
    let personalRelief = 2400
    let answer
    answer = grossSalary - payeDeduction(grossSalary) + personalRelief - deductionsNHIF(grossSalary) - deductionsNSSF(grossSalary) - housingLevy(grossSalary);
  taxResults.innerHTML = answer;
}



function payeDeduction(grossSalary) {
    if (grossSalary <= 24000) {
        return 10/100 * grossSalary
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        return 25/100 * grossSalary
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        return 30/100 * grossSalary
    } else if (grossSalary > 500000 && grossSalary <= 80000) {
        return 32.5/100 * grossSalary
    } else if (grossSalary > 800000) {
        return 35/100 * grossSalary
    }
}



// this bit of code for NHIF has to be this long as the conditions change and its not an interval change for most of them, and the returns also differ

function deductionsNHIF(grossSalary) {
    
    if (grossSalary < 5000) {
        return 150
    } else if (grossSalary >= 6000 && grossSalary < 8000) {
        return 300
    } else if (grossSalary >= 8000 && grossSalary < 12000) {
        return 400
    } else if (grossSalary >= 12000 && grossSalary < 15000) {
        return 500
    } else if (grossSalary >= 15000 && grossSalary < 20000) {
        return 600
    } else if (grossSalary >= 20000 && grossSalary < 25000) {
        return 750
    } else if (grossSalary >= 25000 && grossSalary < 30000) {
        return 850
    } else if (grossSalary >= 30000 && grossSalary < 35000) {
        return 900
    } else if (grossSalary >= 35000 && grossSalary < 40000) {
        return 950
    } else if (grossSalary >= 40000 && grossSalary < 45000) {
        return 1000
    } else if (grossSalary >= 45000 && grossSalary < 50000) {
        return 1100
    } else if (grossSalary >= 50000 && grossSalary < 60000) {
        return 1200
    } else if (grossSalary >= 60000 && grossSalary < 70000) {
        return 1300
    } else if (grossSalary >= 70000 && grossSalary < 80000) {
        return 1400
    } else if (grossSalary >= 80000 && grossSalary < 90000) {
        return 1500
    } else if (grossSalary >= 90000 && grossSalary < 100000) {
        return 1600
    } else if (grossSalary >= 100000) {
        return 1700
    }
}


// const tier1 = "Lower Limit"
// const tier2 = "Upper Limit" 
// using the tiers as parameters was not bringing the desired results

// this bit on NSSF needs a bit of revision 

function deductionsNSSF(grossSalary) {
    if (grossSalary * 6/100 <= 6000) {
        let pensionPay = grossSalary * 6/100
        return Math.min(pensionPay, 6001)
    } else if (grossSalary * 6/100 > 6000) {
        let pensionPay = grossSalary * 6/100
        return Math.min(Math.max(pensionPay, 6001), 18000)
        // this code above allows for our bracket of payment to be between 6001 and 18000 using the math methods
    }
}

function housingLevy(grossSalary) {
    return 1.5/100 * grossSalary
}



