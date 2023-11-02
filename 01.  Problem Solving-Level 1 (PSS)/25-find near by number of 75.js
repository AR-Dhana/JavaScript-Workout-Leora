const fixedNumber = 70;
let number1 = 75;
let number2 = 65;
let x, y, a, b;
if ((number1 > fixedNumber) || (number2 > fixedNumber)) {
    if (number1 > fixedNumber) {
        x = fixedNumber - number1;
        y = (-1) * (x);
        // console.log("", y);
    }
    else {
        y = fixedNumber - number1;
    }
    if (number2 > fixedNumber) {
        a = fixedNumber - number2;
        b = (-1) * (a);
        // console.log("", b);
    }
    else {
        b = fixedNumber - number2;
    }
}
if (y > b) {
    console.log("", number2, "is nearest to", "", fixedNumber);
}
else if (y < b) {
    console.log("", number1, "is nearest to", "", fixedNumber);
}
else if (y == b) {
    console.log("Both the numbers are near to", "", fixedNumber);
}