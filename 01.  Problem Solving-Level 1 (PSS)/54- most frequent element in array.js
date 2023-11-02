//...most frequent element in random numbers input list...//
let randomNumbers=[1,'a',3,'a','a',5,'a'];
let maxFrequentVariable;
let maxFrequentVariableCount=0;
for(i=0;i<randomNumbers.length;i++){
    let loopCount=0;
    for(j=0;j<randomNumbers.length;j++){
        if(randomNumbers[i]==randomNumbers[j]){
            loopCount=loopCount+1;
            if(loopCount>=maxFrequentVariableCount){
                maxFrequentVariableCount=loopCount;
                maxFrequentVariable=randomNumbers[i];
            }
        }
    }
}
console.log(randomNumbers);
console.log("most frequent item of random numbers list -",maxFrequentVariable,"(",maxFrequentVariableCount,'times )');