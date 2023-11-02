let studentNames = ["Arul", "Ashok", "Arivu",  "Basha", "Charlie", "David"];
let myResult;
let newResult;

for(i=0;i<studentNames.length;i++){
    myResult=i+1;
    console.log(myResult);
}
console.log(studentNames);
console.log(myResult);
for(i=(myResult-1);i<studentNames.length;i++){
    console.log(i);
    studentNames.splice(i);
}
console.log(studentNames);