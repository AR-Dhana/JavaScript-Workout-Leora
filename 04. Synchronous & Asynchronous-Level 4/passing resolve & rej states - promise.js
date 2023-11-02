let a = 0;
var ar = new Promise((resolve, reject) => {
    if (a > 0) {
        resolve(a);
    } else {
        reject("My error message");
    }
});

ar.then((res) => { // if promise is fulfilled
    console.log('Promise was resolved ');
    console.log('Returned value:', res);
});

ar.catch((err) => { // if promise fails
    console.log('Some error occured! ')
    console.log('Error message: ', err)
});

ar.finally(()=>{
    console.log('some execution was occure.',);
});