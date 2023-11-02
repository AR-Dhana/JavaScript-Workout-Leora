//..finding 3rd largest element in given array list..//
let randomInputNumbers=[1,2,5,9,11,2,4,3,12,14];
for(i=0;i<randomInputNumbers.length;i++){
    for(j=i+1;j<randomInputNumbers.length;j++){
        if(randomInputNumbers[i]>randomInputNumbers[j]){
            let tempVariable=randomInputNumbers[i];
            randomInputNumbers[i]=randomInputNumbers[j];
            randomInputNumbers[j]=tempVariable;
        }
    }
}
console.log(randomInputNumbers);
console.log(randomInputNumbers[randomInputNumbers.length-3]);