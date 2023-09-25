// code begins here

let grossSalary = 25000
const personalRelief = 2400



function paye() {
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

function deductionsNHIF() {
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

function deductionsNSSF() {
    let pension
    if (grossSalary * 6/100 <= 6000) {
        let pensionPay = grossSalary * 6/100
        pension = Math.min(pensionPay, 6001)
        return pension
    } else if (grossSalary * 6/100 > 6000) {
        let pensionPay = grossSalary * 6/100
        pension = Math.min(Math.max(pensionPay, 6001), 18000)
        return pension
    }
}

function housingLevy() {
    let housingTax = 1.5/100 * grossSalary
    return housingTax
}



const netSalary = grossSalary - paye() + personalRelief - deductionsNHIF() - deductionsNSSF() - housingLevy()

console.log(netSalary)