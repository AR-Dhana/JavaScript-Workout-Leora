// create function to pass the arguments to parameters in an object key values //
let basicDetailsOfPerson={firstName:"",lastName:"",age:"",gender:""};
function getDetails(firstName,lastName,age,gender){
    basicDetailsOfPerson.firstName=firstName;
    basicDetailsOfPerson.lastName=lastName;
    basicDetailsOfPerson.age=age;
    basicDetailsOfPerson.gender=gender;
}
getDetails("dhana","lakshmi",24,"female");
console.log(basicDetailsOfPerson);