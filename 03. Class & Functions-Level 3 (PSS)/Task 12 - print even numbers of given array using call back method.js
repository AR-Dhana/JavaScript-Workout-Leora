function findEvenNumbers(array) {
    let encountedEvenNumbers = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            encountedEvenNumbers.push(array[i]);
        }
    }
    return { "encountedEvenNumbers": encountedEvenNumbers };
}
function findOddNumbers(array) {
    let encountedOddNumbers = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            encountedOddNumbers.push(array[i]);
        }
    }
    return { "encountedOddNumbers": encountedOddNumbers };
}
function selectOperation(operation, array) {
    a = operation(array);
    return a;
}
let sampleNumberCollection = [1, 2, 4, 5, 8, 7, 11, 12, 24, 77, 28];
console.log(selectOperation(findOddNumbers, sampleNumberCollection));