//..duplicate value in an array..//
let array =  [45,50,55,65];
let array1=[];
for(i=0;i<array.length;i++){
    let m=0;
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            m=m+1;
            if(m==1){
                array1.push(array[i]);  
            }
            for(k=j;k<array.length-1;k++){
                array[k]=array[k+1];
            }
            array.length=array.length-1;
            j--;
        }
    }
}
if(array1!=0){
    console.log(array1);
}
else{
    console.log("There is no duplicate value in this array");
}