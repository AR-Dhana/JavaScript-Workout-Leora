// add new element email id of an default object list by using function //
let basicDetailsOfPerson={firstName:"dhana",lastName:"lakshmi",age:24,gender:"female"};
function getDetails(addNewElement){
    basicDetailsOfPerson.email=addNewElement;
}
getDetails("dhanam@gmail.com");
console.log(basicDetailsOfPerson);