//..display single list of the non-repeated elements from two differend input list..// 
let randomNumbersList1=[1,3,0,11,12];
let randomNumbersList2=[2,5,11];
let comboOfList1AndList2=[];
for(i=0;i<randomNumbersList1.length;i++){
    comboOfList1AndList2.push(randomNumbersList1[i]);
}
for(i=0;i<randomNumbersList2.length;i++){
    comboOfList1AndList2.push(randomNumbersList2[i]);
}
for(i=0;i<comboOfList1AndList2.length;i++){
    for(j=i+1;j<comboOfList1AndList2.length;j++){
        if(comboOfList1AndList2[i]==comboOfList1AndList2[j]){
            for(k=j;k<comboOfList1AndList2.length-1;j++){
                comboOfList1AndList2[k]=comboOfList1AndList2[k+1];
            }
            comboOfList1AndList2.length=comboOfList1AndList2.length-1;
            j--;
        }
    }
}
for(i=0;i<comboOfList1AndList2.length;i++){
    for(j=i+1;j<comboOfList1AndList2.length;j++){
        if(comboOfList1AndList2[i]>comboOfList1AndList2[j]){
            let tempVariable=comboOfList1AndList2[i];
            comboOfList1AndList2[i]=comboOfList1AndList2[j];
            comboOfList1AndList2[j]=tempVariable;
        }
    }
}
console.log(comboOfList1AndList2);