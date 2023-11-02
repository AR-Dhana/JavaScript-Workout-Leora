// ascending or not? //
let findNumbers=[1,2,3,4,5,6];
let b=0;
for(i=0;i<findNumbers.length;i++){
    if(findNumbers[i]<findNumbers[i+1]){
        b=b+1;
    }
}
if (b==(findNumbers.length-1)) {
    console.log("The given array is in ascending order");
}
else{
    console.log("The given array is not in ascending order");
}