let myPromise1=new Promise((resolve, reject) => {
    resolve(a=()=>{
        let a=5;
        let b=10;
        console.log('myPromise 1 resolve');
        let c=a+b;
        return c;
    });
    reject(b=()=>{
        console.log('myPromise 1 reject');
    });
});
let myPromise2=new Promise((resolve, reject) => {
    resolve(()=>{
        console.log('myPromise 2 resolve');
    });
    reject(()=>{
        console.log('myPromise 2 reject');
    });
});
let myPromise3=new Promise((resolve, reject) => {
    resolve(()=>{
        console.log('myPromise 3 resolve');
    });
    reject(()=>{
        console.log('myPromise 3 reject');
    });
});
myPromise1.then((a)=>{
    let z=a();
    console.log(z+' my promise 1 success');
});
myPromise1.catch(()=>{
    let x=b();
    console.log('my promise fail');
});
myPromise1.finally(()=>{
    console.log('my promise .finally');
});
myPromise2.then((res)=>{
    console.log('my promise 2 success');
}).catch((err)=>{
    console.log('my promise 2 fail');
});
myPromise3.then((res)=>{
    console.log('my promise 3 success');
}).catch((err)=>{
    console.log('my promise 3 fail')
})