let array = [0,1,2,3,3,3,3,9,11,10,3,67,34];
let indexOfElementToBeSwapedOne = 1;
let indexOfElementToBeSwapedTwo =1;
let z;
z = array[indexOfElementToBeSwapedTwo];
array[indexOfElementToBeSwapedTwo]=array[indexOfElementToBeSwapedOne];
array[indexOfElementToBeSwapedOne]=z;
console.log(array);