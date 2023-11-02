let userInputNumbers=[50,25];

let add=new Promise((resolve, reject) => {
    let sumOfUserInput=0;
    for(i=0;i<userInputNumbers.length;i++){
        sumOfUserInput=sumOfUserInput+userInputNumbers[i];
    }
    if(userInputNumbers.length!=0){
        resolve(sumOfUserInput);
    }
    else{
        reject('pls enter the values');
    }
});
console.log(add);

let sub=new Promise((resolve, reject) => {
    let subOfUserInput=0;
    for(i=0;i<userInputNumbers.length;i++){
        subOfUserInput=subOfUserInput-userInputNumbers[i];
    }
    if(userInputNumbers.length!=0){
        resolve(subOfUserInput);
    }
    else{
        reject('pls enter the values');
    }
});
console.log(sub);

let multiply=new Promise((resolve, reject) => {
    let multiplyOfUserInput=0;
    for(i=0;i<userInputNumbers.length;i++){
        multiplyOfUserInput=multiplyOfUserInput*userInputNumbers[i];
    }
    if(userInputNumbers.length!=0){
        resolve(multiplyOfUserInput);
    }
    else{
        reject('pls enter the values');
    }
});
console.log(multiply);