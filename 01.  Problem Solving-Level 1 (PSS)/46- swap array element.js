let array = [0,1,2,3,3,3];
let indexOfElementToBeSwapedOne = 0;
console.log(array[indexOfElementToBeSwapedOne]);
let indexOfElementToBeSwapedTwo = 1;
console.log(array[indexOfElementToBeSwapedTwo]);
let z;
for(i=0;i<=array.length;i++){
    if(array[i]==array[indexOfElementToBeSwapedTwo]){
        z = array[indexOfElementToBeSwapedTwo];
        array[indexOfElementToBeSwapedTwo]=array[indexOfElementToBeSwapedOne];
        array[indexOfElementToBeSwapedOne]=z;
    }
    else{
        z=array[indexOfElementToBeSwapedOne];
        array[indexOfElementToBeSwapedOne]=array[indexOfElementToBeSwapedTwo];
        array[indexOfElementToBeSwapedTwo]=z;
    }
}
console.log(array);