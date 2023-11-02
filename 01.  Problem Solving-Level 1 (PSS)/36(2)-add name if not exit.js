    //...Add Name If Not Exit...//
let studentNames1 = ["Arul", "Ashok", "vishon"];
let newName1 = "vishon";
let myResult=[];
let newResult=[];
let finalResult=[];
    //  what : toUpperCase operation
    //  why  : to avoid case sensitive problems to comparing the strings...
let studentNames=studentNames1.map(Element=>{return Element.toUpperCase();});
let newName=newName1.toUpperCase();
    //  what : push operation
    //  why  : without this operation there is no value to compare the newName1...
    //         so we can't push the newName1 is not exist in the studendNames1 list...
studentNames.push(newName);
    //  what : for block  //
    //  why : take the index value of studentNames one by one.  // 
for(i=0;i<=studentNames.length;i++){
    //  what : if block //
    //  why : check condition the value of studentNames is not equal to newName...//
    //        push the values into new array of myResult...//
    //  why new Array?  : bcz we can't use the same array to store the new list of values...//
    if (studentNames[i]!=newName) {
        myResult.push(studentNames[i]);
    }
    //  what : else block  //
    //  why : when the above if condition is get boolean-false,executes this condition....
    //        in this case newName is equal to, to the studentNames,so we push the values  
    //        into another new array of newResult...
    //  why another new Array? : bcz both the values are same,so it will push the values 2 times,
    //                           that makes more complecation to console the clear output...
    //                           so,we store this result new array value it makes easy to console the output...
    else{
        newResult.push(newName);
        console.log(newResult)
    }
}
    //  what : for block  //
    //  why : to console the clear output view,bcz (myResult.length-1)
    //        is used to reduce the undefined memory space...
for(i=0;i<(myResult.length-1);i++){
    finalResult.push(myResult[i]);
    console.log(finalResult)
}
    //  what : for block  //
    //  why : to console the clear output view,bcz the array of newResult have multiple time same values... 
for(i=0;i<newResult.length;i=i+2){
    finalResult.push(newResult[i]);
}
console.log(finalResult);