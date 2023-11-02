let array = [1,30];
let a;
let b=0;
let c=1;
for(i=0;i<array.length;i++){
    a=array[i];
    b=b+array[i];  //sum of array list.
    c=c*array[i];  //product of array list.
}
console.log("Sum of an array",b,"Product of an array",c);