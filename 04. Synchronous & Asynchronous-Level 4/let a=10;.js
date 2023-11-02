let a=10;
let b=20;
function sample(){
    let z=new Promise((resolve, reject) => {
        // resolve(a+b);
        resolve('hai');
    });
    z.then('abc');
    return z;
}
console.log(sample());