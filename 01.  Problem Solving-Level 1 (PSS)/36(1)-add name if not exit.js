let studentNames1 = ["Arul", "Ashok", "Arivu","dhanam","yoga","anu","snek"];
let newName1 = "vishon";
let myResult=[];
let newResult=[];
let finalResult=[];
let diff;
let studentNames=studentNames1.map(Element=>{return Element.toUpperCase();});
let newName=newName1.toUpperCase();
studentNames.push(newName);
for(i=0;i<=studentNames.length;i++){
    if (studentNames[i]!=newName) {
        myResult.push(studentNames[i]);
    }
    else{
        newResult.push(newName);
    }
}
diff=(myResult.length)-(newResult.length);
for(i=0;i<(myResult.length-1);i++){
    finalResult.push(myResult[i]);
}
for(i=0;i<newResult.length;i=i+2){
    finalResult.push(newResult[i]);
}
console.log(finalResult);