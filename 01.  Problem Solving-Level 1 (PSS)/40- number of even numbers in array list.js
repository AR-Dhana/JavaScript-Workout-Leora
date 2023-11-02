let findEvenNumbers = [1,3,5,7,9];
let b=0;
for(i=0;i<findEvenNumbers.length;i++){
    if(findEvenNumbers[i]%2==0){
        b=b+1;
    }
}
if(b!=0){
    console.log("There are",b,"even numbers in this array");
}
else{
    console.log("There is no even numbers in this array");
}