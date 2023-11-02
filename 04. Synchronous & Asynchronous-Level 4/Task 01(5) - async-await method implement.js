// user name & password check flow diagram based implimenting code //

let dataCollectionUserNamePassword = [{ userName: 'anu', password: 'Abcd@123' }, { userName: 'dhana', password: 'Efg@245' },
{ userName: 'sne', password: 'Hij@526' }, { userName: 'yoga', password: 'ysdA@456' },
{ userName: 'vishon', password: 'Vfh@756' }, { userName: 'ammu', password: 'sdgX@254' },
{ userName: 'raju', password: 'Hdj@425' }, { userName: 'santhi', password: 'Abcd@123' },
{ userName: 'arun', password: 'Mdhf@754' }, { userName: 'vimal', password: 'Jdkf@754' }
];

async function getUserNameAndValidate(userInputName) {
    let inputNameValidation = userInputName;
    let inputNameValidationSuccess, inputNameValidationFailure;
    if (inputNameValidation != undefined) {
        inputNameValidation = inputNameValidation.toLowerCase();
        if (inputNameValidation.length >= 3) {
            for (i = 0; i < dataCollectionUserNamePassword.length; i++) {
                if (dataCollectionUserNamePassword[i].userName == inputNameValidation) {
                    inputNameValidationSuccess = true;

                }
                else {
                    inputNameValidationFailure = false;
                }
            }
            return inputNameValidationSuccess || inputNameValidationFailure;
        }
        else {
            return { valid: false, error: 'pls enter the valid user name atleast 3 characters.' };
        }
    }
    else {
        return { valid: false, error: 'pls enter the name' };
    }
}

function getPasswordAndValidate(psw) {
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
                            return { valid: true, msg: 'validation success' };
                        }
                        else {
                            return { valid: false, error: 'password must have atleast 8 characters' };
                        }
                    }
                    else {
                        return { valid: false, error: 'password must have atleast 1 numeric number' };
                    }
                }
                else {
                    return { valid: false, error: 'password must have atleast 1 special character' };
                }
            }
            else {
                return { valid: false, error: 'password must have atleast 1 lowercase character' };
            }
        }
        else {
            return { valid: false, error: 'password must have atleast 1 uppercase character' };
        }
    }
    else {
        return { valid: false, error: 'pls enter the password' };
    }
}

async function validateStatusUserNameAndPassword(userInputName, userInputPassword) {
    let validationNameStatus = await getUserNameAndValidate(userInputName);
    if (validationNameStatus == true) {
        return { valid: false, error: 'name already existing' }
    }
    else if (validationNameStatus == false) {
        let validatePasswordStatus = getPasswordAndValidate(userInputPassword);
        return validatePasswordStatus;
    }
    else {
        return validationNameStatus;
    }
}

async function success(msg) {
    validateUserInputStatus = msg;
    return validateUserInputStatus.msg;
}

async function failure(err) {
    validateUserInputStatus = err;
    return validateUserInputStatus.error;
}

async function getUserInput(userInputName, userInputPassword) {
    let validateUserInputStatus = await validateStatusUserNameAndPassword(userInputName, userInputPassword);
    if (validateUserInputStatus.valid == true) {
        validateUserInputStatus = await success(validateUserInputStatus);
        return validateUserInputStatus;
    }
    else if (validateUserInputStatus.valid == false) {
        validateUserInputStatus = await failure(validateUserInputStatus);
        return validateUserInputStatus;
    }
}

let result=async ()=>{
    console.log(await getUserInput('anusiya', 'Ar@2023ar'));
};

result();

// console.log(await getUserInput('anusiya', 'Ar@2023ar'));