// synchronous follow execution //

function print(){
    let a = 'hello';
    console.log(a);
    return a;
}

function syncFunction1(){
    let b=print();
    console.log('syncFunction1');
    return b;
}

function syncFunction2(){
    let c=syncFunction1();
    console.log('syncFunction2');
    return c;
}

function syncFunction3(){
    let d=syncFunction2();
    console.log('syncFunction3');
    return d;
}

console.log(syncFunction3()); // program start execute here //