//...Remove-Duplicate-From-Array...//

//preparing sample random positive and negative number input array//
let array = [1,2,3,1,2,4,-1,0,9,0];
//take the element one by one.
//take initial position element as standard,to campare with other elements in list..
//if element position 1 which is considered as standard, is compared with all other elements now it will be move to the next element position...
//the standard position will be increased one position value till the length of given element list...
for(i=0;i<array.length;i++){
    //take the element of next to initial element as temprory...
    for(j=i+1;j<array.length;j++){
        //compare the elements,if any elememt are in same value?... 
        if(array[i]==array[j]){
            //move the next element value to curent element value...
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