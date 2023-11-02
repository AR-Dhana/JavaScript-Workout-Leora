let userDetails = [{ userName: 'dhana', age: 23, gender: 'female', job: 'developers', company: 'leora infotech' },
{ userName: 'anu', age: 24, gender: 'female', job: 'developers', company: 'leora infotech' },
{ userName: 'sneka', age: 23, gender: 'female', job: 'developers', company: 'leora infotech' },
{ userName: 'yoga', age: 26, gender: 'female', job: 'developers', company: 'leora infotech' },
{ userName: 'prem', age: 24, gender: 'female', job: 'developers', company: 'leora infotech' }];

function getDetailsync(userInput) {
    let userGivenName = userInput;
    if (userGivenName != undefined) {
        let tempCount=0;
        userGivenName = userGivenName.toLowerCase();
        for (i = 0; i < userDetails.length; i++) {
            if (userGivenName == userDetails[i].userName) {
                return { valid: true, msg: userDetails[i] }
            }
            else if(userGivenName!=userDetails[i].userName) {
                tempCount=tempCount+1;
            }
        }
        if(userDetails.length==tempCount){
            return 'name not exists.pls enter the same name you where enter previously.';
        }
    }
    else {
        return 'enter your name pls.'
    }
}

async function getDetailAsync(userInput) {
    let userGivenName = userInput;
    if (userGivenName != undefined) {
        let tempCount=0;
        userGivenName = userGivenName.toLowerCase();
        console.log(userGivenName);
        for (i = 0; i < userDetails.length; i++) {
            if (userGivenName == userDetails[i].userName) {
                return { valid: true, msg: userDetails[i] }
            }
            else if(userGivenName!=userDetails[i].userName) {
                tempCount=tempCount+1;
            }
        }
        if(userDetails.length==tempCount){
            return 'name not exists.pls enter the same name you where enter previously.';
        }
    }
    else {
        return 'enter your name pls.'
    }
}

console.log(getDetailsync('Anu'));

console.log(getDetailAsync('Anu'));