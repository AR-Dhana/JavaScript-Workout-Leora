//...remove specific element in array...//
let array = [1,1,2,7,6 ,3];
let myResult=[];
let specificValue = 1;
for(i=0;i<array.length;i++){
    if(array[i]!=specificValue){
        myResult.push(array[i])
    }
}
console.log(myResult);