function sample(){
    console.log("001")
    return function a () {
        console.log("002");
        z=10;
        return function b (){
            console.log("003");
            y=20;
            return y;
        }
    }
    
}
console.log(sample()()());