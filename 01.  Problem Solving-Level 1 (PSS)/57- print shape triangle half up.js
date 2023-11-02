//..triangle one to six rows..//
let numberOfRows=25;
let start='';
for(i=1;i<=numberOfRows;++i){
    
    for(j=0;j<i;j++){
        start+='* ';
    }
    start+='\n';
}
console.log(start);
