let dhana=new Promise((resolve, reject) => {
    resolve('hai myself dhana');
    reject('dhana rejected');
});
dhana.then((a)=>{
    let state=a
    let vishon=new Promise((resolve, reject) => {
        resolve(state +' i am his bro vishon');
        
    },(b)=>{
        console.log('dhana.then b');
    });
    vishon.then((c)=>{
        let state1=c;
        console.log(state1,'mom');
    },(d)=>{
        console.log('dhana.then d');
    })
});
dhana.catch((ar)=>{
    let dhana1=new Promise((resolve, reject) => {
        reject('dhana1 is also reject');
    })
    dhana1.catch((value)=>{
        console.log(value);
    })
})
/*dhana.finally(()=>{
    console.log('adg')
})
//console.log(dhana)*/
