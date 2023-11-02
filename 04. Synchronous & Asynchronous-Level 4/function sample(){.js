function sample(){
    let z=new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('success');},1000);
        //setTimeout(()=>{reject('fail')},1500);
        console.log('helo')
    }).then((a)=>{console.log(a)});
    console.log(z);
    return z;
}
console.log(sample());