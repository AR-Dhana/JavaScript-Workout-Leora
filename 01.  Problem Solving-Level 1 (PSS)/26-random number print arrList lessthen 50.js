let myRandomNumbers =[3,34,76,5,66,34,86,77,2,11];
let myResult=[];
for(i=0;i<=myRandomNumbers.length;i++)
{
    if (myRandomNumbers[i]<50) {
        myResult.push(myRandomNumbers[i]);
    }
}
console.log(myResult);