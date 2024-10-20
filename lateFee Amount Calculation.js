let lateFee;
let discount = 10;

let daysOverdue = 150;
let isRareBook = true;
let hasMembership = false;

if (isRareBook) {
    lateFee = 5 * daysOverdue;
    if (hasMembership) {
        let lateFee1 = (discount / 100) * lateFee;
        lateFee = lateFee - lateFee1;
        if (lateFee > 100) {
            lateFee = 100;
        }
    }
    else if (lateFee > 100) {
        lateFee = 100;
    }
}
else {
    lateFee = 1 * daysOverdue;
    if (hasMembership) {
        let lateFee1 = (discount / 100) * lateFee;
        lateFee = lateFee - lateFee1;
        if (lateFee > 100) {
            lateFee = 100;
        }
    }
    else if (lateFee > 100) {
        lateFee = 100;
    }
}
console.log(lateFee);