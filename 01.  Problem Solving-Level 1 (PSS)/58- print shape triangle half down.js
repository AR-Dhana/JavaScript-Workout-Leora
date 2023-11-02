let numberOfRows=25;
let star='';
for(i=0;i<numberOfRows;i++){
    for(j=numberOfRows;j>i;--j){
        star+='* ';
    }
    star+='\n';
}
console.log(star);