let sampleArray=[0,5,8,3];

let myPromise=new Promise((resolve, reject) => {
    let sumOfArray=0;
    for(i=0;i<sampleArray.length;i++){
        sumOfArray=sumOfArray+sampleArray[i];
    }
    
    if(sumOfArray.length!=0){
        resolve(sumOfArray);
    }
    else{
        reject('array empty');
    }
});

function checkAsync(){
    if(sampleArray.length>0){
        return myPromise;
    }
    else if(sampleArray.length==0){
        return 'enter the values';
    }
}

console.log(myPromise);