// find the new array list in what are the duplicate values from initialy created array list //
let arrayWithDuplicate=[1,2,5,1,6,3,4,2,1,1,1,6,5,];
let duplicatesOfArray=[];
function findTheDuplicate(){
    for(i=0;i<arrayWithDuplicate.length;i++){
        let tempDummyCount=0;
        if((tempDummyCount<1)||(tempDummyCount>0)){  // using boolean conditions  //
          for(j=i+1;j<arrayWithDuplicate.length;j++){
            if(arrayWithDuplicate[i]==arrayWithDuplicate[j]){
                tempDummyCount=tempDummyCount+1;
                if(tempDummyCount==1){
                    duplicatesOfArray.push(arrayWithDuplicate[i]);
                }
                for(k=j;k<arrayWithDuplicate.length-1;k++){
                    arrayWithDuplicate[k]=arrayWithDuplicate[k+1];
                }
                arrayWithDuplicate.length=arrayWithDuplicate.length-1;
                j--;
            }
          }
        }
    }
    return(duplicatesOfArray);    
}
findTheDuplicate();
console.log(duplicatesOfArray);