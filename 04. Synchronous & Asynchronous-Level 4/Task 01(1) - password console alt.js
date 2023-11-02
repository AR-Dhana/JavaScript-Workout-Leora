let dataCollectionUserNamePassword = [{ userName: 'anu', password: 'Abcd@123' }, { userName: 'dhana', password: 'Efg@245' },
{ userName: 'sne', password: 'Hij@526' }, { userName: 'yoga', password: 'ysdA@456' },
{ userName: 'vishon', password: 'Vfh@756' }, { userName: 'ammu', password: 'sdgX@254' },
{ userName: 'raju', password: 'Hdj@425' }, { userName: 'santhi', password: 'Abcd@123' },
{ userName: 'arun', password: 'Mdhf@754' }, { userName: 'vimal', password: 'Jdkf@754' }
];
function getUserName(userName) {
    let inputName = userName;
    let inputNameValidationStatus1, inputNameValidationStatus2;
    if (inputName != undefined) {
        inputName = inputName.toLowerCase();
        if (inputName.length >= 3) {
            for (j = 0; j < dataCollectionUserNamePassword.length; j++) {
                if (dataCollectionUserNamePassword[j].userName == inputName) {
                    inputNameValidationStatus1 = true;
                }
                else {
                    inputNameValidationStatus2 = false;
                }
            };
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
function getPassword(psw) {
    let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`'];
    let passwordCheck = psw;
    let capsLetter = 0;
    let smallLetter = 0;
    let numberCheck = 0;
    let specialCharCheck = 0;
    if (passwordCheck != undefined) {
        for (i = 0; i < passwordCheck.length; i++) {
            if (passwordCheck.length >= 8) {
                if ((passwordCheck[i] >= 'A') && (passwordCheck[i] <= 'Z')) {
                    capsLetter++;
                }
                if ((passwordCheck[i] >= 'a') && (passwordCheck[i] <= 'z')) {
                    smallLetter++;
                }
                if (passwordCheck[i] >= 0) {
                    numberCheck++;
                }
                for (j = 0; j < specialChar.length; j++) {
                    if (passwordCheck[i] == specialChar[j]) {
                        specialCharCheck++;
                    }
                }
            }
        }
    }
    else {
        return 'pls enter the password';
    }
    if (passwordCheck.length >= 8) {
        if ((capsLetter >= 1)) {
            if (smallLetter >= 1) {
                if (specialCharCheck >= 1) {
                    if (numberCheck >= 1) {
                        return 'password validation success'
                    }
                    else {
                        return 'password must have atleast 1 numeric character';
                    }
                }
                else {
                    return 'password must have atleast 1 special character';
                }
            }
            else {
                return 'password must have atleast 1 lowercase character';
            }
        }
        else {
            return 'password must have atleast 1 uppercase character';
        }
    }
    else {
        return 'password must have atleast 8 character';
    }
}
function validateUserName(userName) {
    let validationNameStatus = getUserName(userName);
    if (validationNameStatus == true) {
        return 'name already existing';
    }
    else if (validationNameStatus == false) {
        return 'user name validation success';
    }
    else {
        return validationNameStatus;
    }
}
function getUserInput(userName, psw) {
    let validateUserNameStatus = validateUserName(userName);
    let validatePasswordStatus = getPassword(psw);
    let conformationStatus = [];
    if (validateUserNameStatus && validatePasswordStatus) {
        conformationStatus.push(validateUserNameStatus);
        conformationStatus.push(validatePasswordStatus);
        return conformationStatus;
    }
}
console.log(getUserInput('dhanam', 'dhanamar@AR2022'));