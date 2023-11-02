let studentNames1 = ["Arul", "Ashok", "Arivu","dhanam","anu"];
let newName1 = "Anu";
let myResult=[];
let newResult=[];
let finalResult=[];
let diff;
let studentNames=studentNames1.map(Element=>{return Element.toUpperCase();});
let newName=newName1.toUpperCase();
studentNames.push(newName);
console.log(studentNames);
console.log(newName);
for(i=0;i<=studentNames.length;i++){
    if (studentNames[i]!=newName) {
        myResult.push(studentNames[i]);
        console.log(studentNames);
        console.log(newName);
        console.log(myResult);
    }
    else{
        newResult.push(newName);
        console.log(newResult);
    }
}
console.log(studentNames);
console.log(newName);
console.log(myResult);
console.log(newResult);
console.log(myResult.length);
console.log(newResult.length);
console.log(diff=(myResult.length)-(newResult.length));
console.log(diff)
for(i=0;i<(myResult.length-1);i++){
    finalResult.push(myResult[i]);
}
for(i=0;i<newResult.length;i=i+2){
    finalResult.push(newResult[i]);
}
console.log(finalResult)