//...Remove-Duplicate-From-Array...//
//get the element//
let array = [1,2,3,1,2,4,-1,0,9,0];
//take the element one by one.
//standard element position..
for(i=0;i<array.length;i++){
    //temprory element position..
    for(j=i+1;j<array.length;j++){
        //compare the elements,if any elememt are same?... 
        if(array[i]==array[j]){
            //move the next element position to curent element position..
            for(k=j;k<array.length-1;k++){
                array[k]=array[k+1];
            }
            //decrease the element list length size...
            array.length=array.length-1;
            //decrease the temprory element position...
            j--;
        }
    }
}
//display the output...
console.log(array);