let studentNames = ["Arul", "Ashok", "Bala", "Basha","Charlie", "David", "DuraiRaj", "Arivu"];
let myResult=[];
for(i=0;i<studentNames.length;i=i+2){
    console.log(studentNames[i]);
    myResult.push(studentNames[i]);
}
console.log(myResult);