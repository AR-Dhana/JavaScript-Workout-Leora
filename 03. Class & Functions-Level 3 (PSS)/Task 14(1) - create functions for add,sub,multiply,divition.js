function add(a, b) {
    let c = a + b;
    return c;
};

function sub(a, b) {
    c = a - b;
    return c;
};

function multiply(a, b) {
    c = a * b;
    return c;
};

function divition(a, b) {
    c = a / b;
    return c;
};

function getInput(a, b, operation) {
    let firstInputNumber = typeof (a);
    let secondInputNumber = typeof (b);
    let selectedOperationType = typeof (operation);
    let selectedOperation = operation;
    if ((firstInputNumber === 'number') && (secondInputNumber === 'number') && (selectedOperationType === 'string')) {
        if (selectedOperation == 'add') {
            let output = add(a, b);
            return output;
        }
        else if (selectedOperation == 'sub') {
            let output = sub(a, b);
            return output;
        }
        else if (selectedOperation == 'multiply') {
            let output = multiply(a, b);
            return output;
        }
        else if (selectedOperation == 'divition') {
            let output = divition(a, b);
            return output;
        }
        else {
            output = 'below operations only available now \n add,sub,multiply,divition..';
            return output;
        }
    }
    else {
        return 'enter two,numbers only for your selected operation.';
    }
};

console.log(getInput(5,6, 'add'));