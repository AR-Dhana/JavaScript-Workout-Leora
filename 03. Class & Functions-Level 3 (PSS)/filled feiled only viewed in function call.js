/** field filled details only view */
function fieldCheck(userNameField,emailIdField,passwordField,phoneNumberField){
    let filledField={};
    let userName=userNameField;
    let emailId=emailIdField;
    let password=passwordField;
    let phoneNumber=phoneNumberField;
    if(userName){
        filledField.userName=userName;
    }
    if(emailId){
        filledField.emailId=emailId;
    }
    if(password){
        filledField.password=password;
    }
    if(phoneNumber){
        filledField.phoneNumber=phoneNumber;
    }
    return filledField;
}
let param=fieldCheck("dhana","sdkfhsdkfj");
console.log(param);