// async call back chaining execution //
function print(){
    let a = 'hello';
    console.log(a);
}

function syncFunction1(){
    setTimeout(print,1000);
    console.log('syncFunction1')
    return print();
}

function syncFunction2(){
    setTimeout(syncFunction1,1000);
    console.log('syncFunction2')
    return syncFunction1();
}

function syncFunction3(){
    setTimeout(syncFunction2,1000);
    console.log('syncFunction3');
    return syncFunction2();
}

syncFunction3();