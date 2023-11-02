// user name password using nested if //
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
    let passwordCheck = psw;
    if (passwordCheck != undefined) {
        let passwordCheckCaps = passwordCheck.search(/[A-Z]/);
        let passwordCheckSmall = passwordCheck.search(/[a-z]/);
        let passwordCheckNumeric = passwordCheck.search(/[0-9]/);
        let passwordCheckSpecailChar = passwordCheck.search(/['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`']/);
        if (passwordCheckCaps >= 0) {
            if (passwordCheckSmall >= 0) {
                if (passwordCheckSpecailChar >= 0) {
                    if (passwordCheckNumeric >= 0) {
                        if (passwordCheck.length >= 8) {
                            return 'password validation success';
                        }
                        else {
                            return 'password must have atleast 8 characters';
                        }
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
        return 'enter the password'
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
console.log(validateUserName('Anu'));
console.log(getPassword('Ar@2022ar'));