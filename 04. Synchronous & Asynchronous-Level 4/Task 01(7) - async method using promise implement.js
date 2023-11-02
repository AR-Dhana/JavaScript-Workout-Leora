// user name & password check flow diagram based implimenting code //

let dataCollectionUserNamePassword = [{ userName: 'anu', password: 'Abcd@123' }, { userName: 'dhana', password: 'Efg@245' },
{ userName: 'sne', password: 'Hij@526' }, { userName: 'yoga', password: 'ysdA@456' },
{ userName: 'vishon', password: 'Vfh@756' }, { userName: 'ammu', password: 'sdgX@254' },
{ userName: 'raju', password: 'Hdj@425' }, { userName: 'santhi', password: 'Abcd@123' },
{ userName: 'arun', password: 'Mdhf@754' }, { userName: 'vimal', password: 'Jdkf@754' }
];

function success(msg) {
    validateUserInputStatus = msg;
    return validateUserInputStatus.msg;
}

function failure(err) {
    validateUserInputStatus = err;
    return validateUserInputStatus.error;
}

function getUserNameAndValidate(userInputName) {
    let inputNameValidationSuccess, inputNameValidationFailure;
    let userInputNameStatus = new Promise((resolve, reject) => {
        let inputNameValidation = userInputName;
        if (inputNameValidation != undefined) {
            inputNameValidation = inputNameValidation.toLowerCase();
            resolve(inputNameValidation);
        }
        reject({ valid: false, error: 'pls enter the name' });
    });
    userInputNameStatus.then((userInputNameStatusValid) => {
        let inputNameValidation=userInputNameStatusValid;
        let validInputNameLength = new Promise((resolve, reject) => {
            if (inputNameValidation.length >= 3) {
                resolve(inputNameValidation);
            }
            reject({ valid: false, error: 'pls enter the valid user name atleast 3 characters.' })
        });
        validInputNameLength.then((nameLengthSuccess)=>{
            let inputNameValidation=nameLengthSuccess;
            let checkInputNameAlreadyExist = new Promise((resolve, reject) => {
                for (i = 0; i < dataCollectionUserNamePassword.length; i++) {
                    if (dataCollectionUserNamePassword[i].userName == inputNameValidation) {
                        inputNameValidationSuccess = true;
                    }
                    else {
                        inputNameValidationFailure = false;
                    }
                }
                let inputNameValidationStatus=inputNameValidationSuccess||inputNameValidationFailure;
                if(inputNameValidationStatus){
                    resolve(inputNameValidation);
                }
                else{
                    reject(inputNameValidation);
                }
            });
            checkInputNameAlreadyExist.then((nameExist) => {
                return { valid: false, error: 'name already existing pls try another.' };
            });
            checkInputNameAlreadyExist.catch((nameNotExist)=>{
                getPasswordAndValidate();
            });
        });
        validInputNameLength.catch((nameLengthFailure)=>{
            return { valid: false, error: 'pls enter the valid user name atleast 3 characters.' };
        });
    });
    userInputNameStatus.catch((userInputNameStatusFail)=>{
        return { valid: false, error: 'pls enter the name' };
    });
}

function validateStatusUserNameAndPassword(userInputName, userInputPassword){
    let validationNameStatus = getUserNameAndValidate(userInputName);
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

function getUserInput(userInputName, userInputPassword){
    let validateUserInputStatus = validateStatusUserNameAndPassword(userInputName, userInputPassword);
    if(validateUserInputStatus.valid==true){
        validateUserInputStatus = success(validateUserInputStatus);
        return validateUserInputStatus;
    }
    else{
        validateUserInputStatus = failure(validateUserInputStatus);
        return validateUserInputStatus;
    }
}

console.log(getUserInput());