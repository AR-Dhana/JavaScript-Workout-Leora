//..half triangle right..//
let numberOfRows=25;
let star='';
for(i=1;i<=numberOfRows;i++){
    for(j=0;j<i;j++){
        star+='* ';
    }
    star+='\n';
}
for(i=0;i<=numberOfRows;i++){
    for(j=numberOfRows-1;j>i;j--){
        star+='* ';
    }
    star+='\n';
}
console.log(star);