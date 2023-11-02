//.. remove duplicate values from the given input array..//
let randomNumbers =  [45,50,55,65, 55,45];
let duplicateElement=[];
for(i=0;i<randomNumbers.length;i++){
    let tempDummyCount=0;
    for(j=i+1;j<randomNumbers.length;j++){
        if(randomNumbers[i]==randomNumbers[j]){
            tempDummyCount=tempDummyCount+1;
            if(tempDummyCount==1){
                duplicateElement.push(randomNumbers[i]);  
            }
            for(k=j;k<randomNumbers.length-1;k++){
                randomNumbers[k]=randomNumbers[k+1];
            }
            randomNumbers.length=randomNumbers.length-1;
            j--;
        }
    }
}
if(duplicateElement!=0){
    console.log(duplicateElement);
}
else{
    console.log("There is no duplicate value in this array");
}