//..print the element which present in one input list and not present in another input list..//
let randomNumberInputOne=[1,2,3,5,2,10];
let randomNumberInputTwo=[2,3,4,6];
let nonMatchingNumbers=[];
for(i=0;i<randomNumberInputOne.length;i++){
    for(j=i+1;j<randomNumberInputOne.length;j++){
        if(randomNumberInputOne[i]==randomNumberInputOne[j]){
            for(k=j;k<randomNumberInputOne.length-1;k++){
                randomNumberInputOne[k]=randomNumberInputOne[k+1];
            }
            randomNumberInputOne.length=randomNumberInputOne.length-1;
            j--;
        }
    }
}
for(i=0;i<randomNumberInputTwo.length;i++){
    for(j=i+1;j<randomNumberInputTwo.length;j++){
        if(randomNumberInputTwo[i]==randomNumberInputTwo[j]){
            for(k=j;k<randomNumberInputTwo.length-1;k++){
                randomNumberInputTwo[k]=randomNumberInputTwo[k+1];
            }
            randomNumberInputTwo.length=randomNumberInputTwo.length-1;
            j--;
        }
    }
}
for(i=0;i<randomNumberInputOne.length;i++){
    let loopCount=0;
    for(j=0;j<randomNumberInputTwo.length;j++){
        if(randomNumberInputOne[i]==randomNumberInputTwo[j]){
          i++;
        }
        else if(randomNumberInputOne[i]!=randomNumberInputTwo[j]){
            loopCount=loopCount+1;
        }
    }
    if(loopCount>=1){
        nonMatchingNumbers.push(randomNumberInputOne[i])
    }
}
for(i=0;i<randomNumberInputTwo.length;i++){
    let loopCount=0;
    for(j=0;j<randomNumberInputOne.length;j++){
        if(randomNumberInputTwo[i]==randomNumberInputOne[j]){
            i++;
        }
        else if(randomNumberInputTwo[i]!=randomNumberInputOne[j]){
            loopCount=loopCount+1;
        }
    }
    if(loopCount>=1){
        nonMatchingNumbers.push(randomNumberInputTwo[i])
    }
}
for(i=0;i<nonMatchingNumbers.length;i++){
    if(nonMatchingNumbers[i]){
        console.log(nonMatchingNumbers[i]);
    }
}