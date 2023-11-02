function validMailChecking(mailid){
    let givenString=mailid;
    let searchChar=givenString.search("@");
    if(searchChar>=0){
        return true;
    }
    else{
        return false;
    }
    // return Number(validInputMailId);
}
function validPasswordChecking(psw){
    let password=new String(psw);
    if(password.length>=6){
        return true;
    }
    else{
        return false;
    }
    // return Number(validInputPassword);
}
// function mailIdAndPasswordStatus(validMailChecking,validPasswordChecking,mailid,psw){
//     let mailidStatus=validMailChecking(mailid);
//     let passwordStatus=validPasswordChecking(psw);
//     if((mailidStatus==1)&&(passwordStatus==1)){
//         userInputValidation=true;
//     }
//     else if(mailidStatus<passwordStatus){
//         userInputValidation=0.5;
//     }
//     else if(mailidStatus>passwordStatus){
//         userInputValidation=-0.5;
//     }
//     else if((mailidStatus==0)&&(passwordStatus==0)){
//         userInputValidation=false;
//     }
//     return Number(userInputValidation);
// }
function userInputValidationSuccess(mailIdAndPasswordStatus,mailid,psw){
    // let status=mailIdAndPasswordStatus(validMailChecking,validPasswordChecking,mailid,psw);
    // if(status==1){
    //     userDef='User Valitation Success';
    // }
    // else if(status==0.5){
    //     userDef='please enter valid mailid'
    // }
    // return userDef;
    console.log("valid credential");
}
function userInputValidationFailure(mailIdAndPasswordStatus,mailid,psw){
    // let status=mailIdAndPasswordStatus(validMailChecking,validPasswordChecking,mailid,psw);
    // if(status==-0.5){
    //     userDef='please enter valid password';
    // }
    // else if(status==0){
    //     userDef='please enter valid input';
    // }
    // return userDef;
    console.log("invalid credential");
}
function getUserInput(mailid,psw,successFun,failureFun){
    // let statusFromValidationSuccess=userInputValidationSuccess(mailIdAndPasswordStatus,mailid,psw);
    // let statusFromValidationFailure=userInputValidationFailure(mailIdAndPasswordStatus,mailid,psw);
    let status = validMailChecking(mailid) && validPasswordChecking(psw)
    console.log("status--->",status);
    if(status){
        successFun()
        // return statusFromValidationSuccess;
        return status;
    }
    else{
        failureFun()
        // return statusFromValidationFailure;
        return status
    }
}
console.log(getUserInput('abc@gmail.com',12588,userInputValidationSuccess,userInputValidationFailure));