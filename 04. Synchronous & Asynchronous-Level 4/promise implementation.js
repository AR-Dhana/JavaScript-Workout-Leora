let dataCollectionUserNamePassword = [{ userName: 'anu', password: 'Abcd@123' }, { userName: 'dhana', password: 'Efg@245' },
{ userName: 'sne', password: 'Hij@526' }, { userName: 'yoga', password: 'ysdA@456' },
{ userName: 'vishon', password: 'Vfh@756' }, { userName: 'ammu', password: 'sdgX@254' },
{ userName: 'raju', password: 'Hdj@425' }, { userName: 'santhi', password: 'Abcd@123' },
{ userName: 'arun', password: 'Mdhf@754' }, { userName: 'vimal', password: 'Jdkf@754' }
];

async function getUserName(userInput){
    let userInput1=userInput;
    let userInputName=new Promise((resolve, reject) => {
        if(userInput1!=undefined){
            resolve(userInput1);
        }
        else{
            reject({ valid: false, error: 'pls enter the name' });
        }
    });
    userInputName.then(function(userInput){
        if (userInputName.length >= 3) {
            for (i = 0; i < dataCollectionUserNamePassword.length; i++) {
                if (dataCollectionUserNamePassword[i].userName == userInputName) {
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
    });
}
console.log(getUserName('anu'));
