// Asynchronous flow execution //
function print(){
    let a = 'hello';
    console.log(a);
    return a;
}

function syncFunction1(){
    let b=setTimeout(print,13000);
    console.log('syncFunction1')
    return b;
}

function syncFunction2(){
    let c=setTimeout(syncFunction1,9000);
    console.log('syncFunction2')
    return c;
}

function syncFunction3(){
    let d=setTimeout(syncFunction2,5000);
    console.log('syncFunction3');
    return d;
}

syncFunction3();