//..Adjust college Fees from student Details list based on the scholorship Amount..//
let studentDetailsList = { name: "Arul", age: 18, gender: "male", course: "CSE", state: "TamilNadu", district: "Chennai", pincode: 6000028 };
studentDetailsList.collegeFee=25000;
let scholorshipAmount=250;
if((scholorshipAmount>=0)&&(scholorshipAmount<=studentDetailsList.collegeFee)){
    studentDetailsList.collegeFee=studentDetailsList.collegeFee-scholorshipAmount;

}
else if((scholorshipAmount>studentDetailsList.collegeFee)||(scholorshipAmount<0)){
    console.log(scholorshipAmount,"invalid scholorship amount");
}
console.log(studentDetailsList);