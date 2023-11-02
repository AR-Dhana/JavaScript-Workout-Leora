function add(d, e) {
    let a = d;
    let b = e;
    let c = a + b;
    return c;
};

function sub(d, e) {
    let a = d;
    let b = e;
    c = a - b;
    return c;
};

function multiply(d, e) {
    let a = d;
    let b = e;
    c = a * b;
    return c;
};

function divition(d, e) {
    let a = d;
    let b = e;
    c = a / b;
    return c;
};

function getInput(a, b, operation) {
    let params = operation;
    if (params == 'add') {
        let output = add(a, b);
        return output;
    }
    else if (params == 'sub') {
        let output = sub(a, b);
        return output;
    }
    else if (params == 'multiply') {
        let output = multiply(a, b);
        return output;
    }
    else if (params == 'divition') {
        let output = divition(a, b);
        return output;
    }
    else{
        output='below operations only available now \n add,sub,multiply,divition..';
        return output;
    }
};


console.log(getInput(5,null,'add'));