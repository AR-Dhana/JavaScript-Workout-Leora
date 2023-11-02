const fixedBoundedNumber = 70;
let nearBoundaryOne = 65;
let nearBoundaryTwo = 65;
// let x, y, a, b;

let result=((typeof (nearBoundaryOne) == Number) || (typeof (nearBoundaryTwo) == Number))?"one":"two";
console.log(result);

if ((typeof (nearBoundaryOne) === Number) && (typeof (nearBoundaryTwo) === Number)) {
    let x, y, a, b;
    if ((nearBoundaryOne > fixedBoundedNumber) || (nearBoundaryTwo > fixedBoundedNumber)) {
        if (nearBoundaryOne > fixedBoundedNumber) {
            x = fixedBoundedNumber - nearBoundaryOne;
            y = (-1) * (x);
        }
        else {
            y = fixedBoundedNumber - nearBoundaryOne;
        }
        if (nearBoundaryTwo > fixedBoundedNumber) {
            a = fixedBoundedNumber - nearBoundaryTwo;
            b = (-1) * (a);
        }
        else {
            b = fixedBoundedNumber - nearBoundaryTwo;
        }
    }
    if (y > b) {
        console.log("", nearBoundaryTwo, "is nearest to", "", fixedBoundedNumber);
    }
    else if (y < b) {
        console.log("", nearBoundaryOne, "is nearest to", "", fixedBoundedNumber);
    }
    else if (y == b) {
        console.log("Both the numbers", nearBoundaryOne, "&", nearBoundaryTwo, "are near to", fixedBoundedNumber);
    }
}
else {
    console.log('invalid input number');
}