function findEvenNumbers(array){
    let encountedEvenNumbers=[];
    let evenNumberCount=0;
    let totalSumOfEvenNumbers=0;
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenNumberCount++;
            totalSumOfEvenNumbers=totalSumOfEvenNumbers+array[i];
            encountedEvenNumbers.push(array[i]);
        }
    }
    return {"encountedEvenNumbers":encountedEvenNumbers,"evenNumberCount":evenNumberCount,"totalSumOfEvenNumbers":totalSumOfEvenNumbers};
}
function findOddNumbers(array){
    let encountedOddNumbers=[];
    let oddNumberCount=0;
    let totalSumOfOddNumbers=0;
    for(i=0;i<array.length;i++){
        if(array[i]%2!=0){
            oddNumberCount++;
            totalSumOfOddNumbers=totalSumOfOddNumbers+array[i];
            encountedOddNumbers.push(array[i]);
        }
    }
    return {"encountedOddNumbers":encountedOddNumbers,"oddNumberCount":oddNumberCount,"totalSumOfOddNumbers":totalSumOfOddNumbers};
}
function selectOperation(operation,array){
    a=operation(array);
    return a;
}
let sampleNumberCollection=[1,2,4,5,8,7,11,12,24,77,28];
console.log(selectOperation(findOddNumbers,sampleNumberCollection));