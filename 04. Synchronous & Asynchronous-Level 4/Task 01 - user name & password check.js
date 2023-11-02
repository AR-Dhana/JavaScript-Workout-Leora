// user name & password check //
let dataCollectionUserNamePassword = [{ userName: 'anu', password: 'Abcd@123' }, { userName: 'dhana', password: 'Efg@245' },
    { userName: 'sne', password: 'Hij@526' }, { userName: 'yoga', password: 'ysdA@456' },
    { userName: 'vishon', password: 'Vfh@756' }, { userName: 'ammu', password: 'sdgX@254' },
    { userName: 'raju', password: 'Hdj@425' }, { userName: 'santhi', password: 'Abcd@123' },
    { userName: 'arun', password: 'Mdhf@754' }, { userName: 'vimal', password: 'Jdkf@754' }
];
function getUserName(userName) {
    let inputNameValidation = userName;
    let inputNameValidationStatus1, inputNameValidationStatus2;
    if (inputNameValidation != undefined) {
        inputNameValidation = inputNameValidation.toLowerCase();
        if (inputNameValidation.length >= 3) {
            for (j = 0; j < dataCollectionUserNamePassword.length; j++) {
                if (dataCollectionUserNamePassword[j].userName == inputNameValidation) {
                    inputNameValidationStatus1 = true;
                }
                else {
                    inputNameValidationStatus2 = false;
                }
            }
            return inputNameValidationStatus1 || inputNameValidationStatus2;
        }
        else {
            return 'pls enter the valid user name atleast 3 characters.';
        }
    }
    else {
        return 'pls enter the name.';
    }
}
function getPasswordAndValidate(psw) {
    let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`'];
    let pswCheck = psw;
    let capsLetter = 0;
    let smallLetter = 0;
    let numberCheck = 0;
    let specialCharCheck = 0;
    if (pswCheck != undefined) {
        for (i = 0; i < pswCheck.length; i++) {
            if (pswCheck.length >= 8) {
                if ((pswCheck[i] >= 'A') && (pswCheck[i] <= 'Z')) {
                    capsLetter++;
                }
                if ((pswCheck[i] >= 'a') && (pswCheck[i] <= 'z')) {
                    smallLetter++;
                }
                if (pswCheck[i] >= 0) {
                    numberCheck++;
                }
                for (j = 0; j < specialChar.length; j++) {
                    if (pswCheck[i] == specialChar[j]) {
                        specialCharCheck++;
                    }
                }
            }
        }
    }
    else {
        return 'pls enter the password.';
    }
    if ((capsLetter >= 1) && (smallLetter >= 1) && (specialCharCheck >= 1) && (numberCheck >= 1)) {
        return 'password validation success.';
    }
    else {
        return 'password must have atleast 8 letters,it must contain atleast 1 special char,1 uppercase letter,1 lowercase letter,1 numeric character.';
    }
}
function validateUserName(userName) {
    let validationNameStatus = getUserName(userName);
    if (validationNameStatus == true) {
        return 'name already existing';
    }
    else if (validationNameStatus == false) {
        return 'user name validation success.';
    }
    else {
        return validationNameStatus;
    }
}
function getUserInput(userName, psw) {
    let validateUserNameStatus = validateUserName(userName);
    let validatePasswordStatus = getPasswordAndValidate(psw);
    let conformationStatus = [];
    if (validateUserNameStatus && validatePasswordStatus) {
        conformationStatus.push(validateUserNameStatus);
        conformationStatus.push(validatePasswordStatus);
        return conformationStatus;
    }
}
console.log(getUserInput("Anusiya", "jGs%87hg"));