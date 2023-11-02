let sampleMobilePhoneDetails = [
{ brand: "Oneplus", model: "O30", price: "19000" },
{ brand: "Mi", model: "M20", price: "13000" },
{ brand: "realme", model: "S35", price: "21000" },
{ brand: "Samsung", model: "S10", price: "10000" },
{ brand: "Lava", model: "O10", price: "9000" },
{ brand: "iPhone", model: "i10", price: "60000" },
{ brand: "Oppo", model: "O20", price: "14000" },
{ brand: "MicroMax", model: "i20", price: "80000" },
{ brand: "Samsung", model: "S30", price: "22000" },
{ brand: "realme", model: "S10", price: "24000" },
{ brand: "Mi", model: "M30", price: "18000" },
{ brand: "Nokia", model: "O30", price: "19000" },
{ brand: "Vivo", model: "O30", price: "19000" },
{ brand: "iPhone", model: "i30", price: "90000" }];

let brandList=[];
let mobileGroups=[];
let brand=[];

for(i=0;i<sampleMobilePhoneDetails.length;i++){
    sampleMobilePhoneDetails[i].brand=sampleMobilePhoneDetails[i].brand.toLowerCase();
    brandList.push(sampleMobilePhoneDetails[i].brand);
}

for(i=0;i<brandList.length;i++){
    for(j=i+1;j<brandList.length;j++){
        if(brandList[i]==brandList[j]){
            for(k=j;k<brandList.length-1;k++){
                brandList[k]=brandList[k+1];
            }
            brandList.length=brandList.length-1;
            j--;
        }
    }
}
brand.push(brandList[0]);
for(i=0;i<brandList.length;i++){
    let tempbrand=new Array();
    mobileGroups.push(brandList[i]);
    for(j=0;j<sampleMobilePhoneDetails.length;j++){
        if(brandList[i]==sampleMobilePhoneDetails[j].brand){
            tempbrand.push(sampleMobilePhoneDetails[j]);
        }
    }
    brand.push(tempbrand);
    mobileGroups=brand;
}
console.log(mobileGroups);