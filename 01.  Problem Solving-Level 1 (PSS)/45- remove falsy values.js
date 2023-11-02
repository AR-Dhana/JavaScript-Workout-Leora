let array1 = [NaN, 0, 15, false, -22, '',undefined, 47, null,20,0,null,''];
let myResult=[];
for(i=0;i<array1.length;i++){
    if(array1[i]){
        myResult.push(array1[i]);
    }
}
console.log(myResult);