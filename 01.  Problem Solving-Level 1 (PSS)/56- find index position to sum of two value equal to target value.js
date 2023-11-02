//..find the index position to Sum of two values is equals the target value..//
let randomNumbers=[10,20,30,40,52,50,25];
let totalSumValue=52;
let elementPositionOne,elementPositionTwo;
for(i=0;i<randomNumbers.length;i++){
    for(j=i+1;j<randomNumbers.length;j++){
        if(randomNumbers[i]+randomNumbers[j]==totalSumValue){
            elementPositionOne=i;
            elementPositionTwo=j;
        }
        else{
            elementPositionOne="not found";
            elementPositionTwo="not found";
        }
    }
}
console.log(elementPositionOne,elementPositionTwo);