let array1 = [1,0,2,3,4,1];
let array2 = [3,5,1,8,13,15];
let output = [];
let c;
if(array1.length<array2.length) {
    c=array2.length-array1.length;
    for(i=0;i<c;i++){
        array1.push(0);
    }
}
else{
    c=array1.length-array2.length;
    for(i=0;i<c;i++){
        array2.push(0);
    }
}
for(i=0;i<array1.length;i++){
    for(i=0;i<array2.length;i++){
        output[i]=array1[i]+array2[i];
    }
}
console.log(output);