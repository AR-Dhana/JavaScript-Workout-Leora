//..add prifix to students name..//
let studentDetailsList = { name: "Arul", age: 21, gender: "male", course: "CSE", state: "TamilNadu", district: "Chennai", pincode: 6000028 };
let prifixGenderMale='Mr.';
let prifixGenderFemale='Mrs.';
studentDetailsList.gender=studentDetailsList.gender.toLowerCase();
if (studentDetailsList.gender == 'male') {
    studentDetailsList.name=prifixGenderMale.concat(studentDetailsList.name)
}
else{
    studentDetailsList.name=prifixGenderFemale.concat(studentDetailsList.name);
}
console.log(studentDetailsList);