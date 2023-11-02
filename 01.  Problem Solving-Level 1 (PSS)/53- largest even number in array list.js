//...largest even number in random number list...//
let randomNumber=[1,3,5,4,8,6];
let largestEvenNumber=0;
for(i=0;i<randomNumber.length;i++){
    for(j=0;j<randomNumber.length;j++){
        if(randomNumber[i]<randomNumber[j]){
            let tempVariable=randomNumber[i];
            randomNumber[i]=randomNumber[j];
            randomNumber[j]=tempVariable;
        }
    }
}
for(i=0;i<randomNumber.length;i++){
    if(randomNumber[i]%2==0){
        largestEvenNumber=randomNumber[i];
    }
}
if(largestEvenNumber!=0){
    console.log(largestEvenNumber);
}
else{
    console.log("there is no even numbers in this array");
}