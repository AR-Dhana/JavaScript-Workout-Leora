let myPromise1=new Promise((resolve, reject) => {
    resolve((v)=>{
        let a=5;
        let b=10;
        console.log('myPromise1 resolve');
        let c=a+b;
        return c;
    });
    reject(()=>{
        console.log('myPromise1 reject');
    });
});
let myPromise2=new Promise((resolve, reject) => {
    resolve(()=>{
        console.log('myPromise2 resolve');
    });
    reject(()=>{
        console.log('myPromise2 reject');
    });
});
let myPromise3=new Promise((resolve, reject) => {
    resolve(()=>{
        console.log('myPromise3 resolve');
    });
    reject(()=>{
        console.log('myPromise3 reject');
    });
});
myPromise1.then((a)=>{
    let z=a;
    console.log(z+'my promise .then');
});
myPromise1.catch(()=>{
    console.log('my promise .catch');
});
myPromise1.finally(()=>{
    console.log('my promise .finally');
});