function validMailChecking(mailid) {
    let givenString = mailid;
    let searchChar = givenString.search("@");
    if (searchChar > 0) {
        validInputMailId = true;
    }
    else {
        validInputMailId = false;
    }
    return Number(validInputMailId);
}
function validPasswordChecking(psw) {
    let password = new String(psw);
    if (password.length >= 6) {
        validInputPassword = true;
    }
    else {
        validInputPassword = false;
    }
    return Number(validInputPassword);
}
function mailIdAndPasswordStatus(validMailChecking, validPasswordChecking, mailid, psw) {
    let mailidStatus = validMailChecking(mailid);
    let passwordStatus = validPasswordChecking(psw);
    if ((mailidStatus == 1) && (passwordStatus == 1)) {
        userInputValidation = true;
    }
    else if (mailidStatus < passwordStatus) {
        userInputValidation = 0.5;
    }
    else if (mailidStatus > passwordStatus) {
        userInputValidation = -0.5;
    }
    else if ((mailidStatus == 0) && (passwordStatus == 0)) {
        userInputValidation = false;
    }
    return Number(userInputValidation);
}
function userInputValidationSuccess(mailIdAndPasswordStatus, mailid, psw) {
    let userDef;
    let status = mailIdAndPasswordStatus(validMailChecking, validPasswordChecking, mailid, psw);
    if (status == 1) {
        userDef = 'User Valitation Success';
    }
    else if (status == 0.5) {
        userDef = 'please enter valid mailid'
    }
    return userDef;
}
function userInputValidationFailure(mailIdAndPasswordStatus, mailid, psw) {
    let status = mailIdAndPasswordStatus(validMailChecking, validPasswordChecking, mailid, psw);
    if (status == -0.5) {
        userDef = 'please enter valid password';
    }
    else if (status == 0) {
        userDef = 'please enter valid mail id & password';
    }
    return userDef;
}
function getUserInput(mailid, psw) {
    let statusFromValidationSuccess = userInputValidationSuccess(mailIdAndPasswordStatus, mailid, psw);
    let statusFromValidationFailure = userInputValidationFailure(mailIdAndPasswordStatus, mailid, psw);
    if (statusFromValidationSuccess) {
        return statusFromValidationSuccess;
    }
    else {
        return statusFromValidationFailure;
    }
}
console.log(getUserInput('abc@gmail.com', 125886));