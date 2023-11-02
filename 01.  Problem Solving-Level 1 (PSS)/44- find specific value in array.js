let array = [1,2,3,4,5] ;
let arrayUpperCase=[];
let specificValue =8;
let specificValueUpperCase;
let b=0;
if(array===""){
for(i=0;i<array.length;i++){
    arrayUpperCase[i]=array[i].toUpperCase();
}
specificValueUpperCase=specificValue.toUpperCase();
for(i=0;i<array.length;i++){
    if(arrayUpperCase[i]==specificValueUpperCase){
        b=b+1;
    }
}
}
else{
    for(i=0;i<array.length;i++){
        if(array[i]==specificValue){
            b=b+1;
        }
    }    
}
if(b==1){
    console.log("The Specific Value is exist in the given array.");
}
else{
    console.log("The Specific Value is doesn't exist in the given array.");
}