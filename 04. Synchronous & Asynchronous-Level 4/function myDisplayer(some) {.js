function myDisplayer(some) {
    let y = some;
    console.log(some)
  }
let myName=new Promise(function(resolve,bending,reject){
    let x = 5;
    if (x < 0) {
        resolve("OK");
      } else if(x==5){
        reject("next");
      }else{
        bending("error");
      }
});

myName.then(
    function(some){
        myDisplayer(some);
    },
    function(some){
        myDisplayer(some);
    },
    function(some){
        myDisplayer(some);
    }
   
);
