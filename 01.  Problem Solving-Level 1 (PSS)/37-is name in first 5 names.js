//...Is Name In First 5 Names...//
let studentNames1 = ["Arul", "Ashok", "Arivu", "Bala", "Basha", "Charlie", "David", "DuraiRaj"];
let checkName1 = "Charlie";
let myResult=0;
let studentNames=studentNames1.map(Element=>{return Element.toUpperCase();});
let checkName=checkName1.toUpperCase();
for(i=0;i<=4;i++){
    if (studentNames[i]!=checkName) {
        myResult=myResult+1;
    }
    else{
        console.log("Name exist");
    }
}
if (myResult==5) {
    console.log("Name not exist");
}