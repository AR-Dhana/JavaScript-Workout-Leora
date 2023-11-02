let count=0;
function welcome(){
    count++;
    console.log('level : ',count);
    if(count==5){
        clearInterval(intervelId);
    }
}
let intervelId=setInterval(welcome,2000);