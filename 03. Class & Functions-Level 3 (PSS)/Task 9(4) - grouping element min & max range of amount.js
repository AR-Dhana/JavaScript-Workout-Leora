let sampleMobilePhoneDetails = [
    { brand: "Oneplus", model: "O30", price: "25000" },
    { brand: "Mi", model: "M20", price: "13000" },
    { brand: "realme", model: "S35", price: "11000" },
    { brand: "Samsung", model: "S10", price: "10000" },
    { brand: "Lava", model: "O10", price: "9000" },
    { brand: "iPhone", model: "i10", price: "60000" },
    { brand: "Oppo", model: "O20", price: "14000" },
    { brand: "MicroMax", model: "i20", price: "18000" },
    { brand: "Samsung", model: "S30", price: "27000" },
    { brand: "realme", model: "S10", price: "24000" },
    { brand: "Mi", model: "M30", price: "18000" },
    { brand: "Nokia", model: "O30", price: "19000" },
    { brand: "Vivo", model: "O30", price: "19000" },
    { brand: "iPhone", model: "i30", price: "90000" },
    { brand: "Samsung", model: "S31", price: "25000" },
    { brand: "realme", model: "S15", price: "30000" },
    { brand: "Mi", model: "M31", price: "35000" },
    { brand: "Nokia", model: "O32", price: "21000" },
    { brand: "Vivo", model: "A30", price: "29000" },
    { brand: "iPhone", model: "i35", price: "95000" },
    { brand: "Oneplus", model: "A15", price: "15000" },
    { brand: "Mi", model: "M25", price: "23000" },
    { brand: "realme", model: "S40", price: "29000" },
    { brand: "Samsung", model: "S43", price: "50000" },
    { brand: "Lava", model: "O11", price: "27000" },
    { brand: "iPhone", model: "i15", price: "50000" },
    { brand: "Oppo", model: "O22", price: "28000" },
    { brand: "MicroMax", model: "i21", price: "60000" },
    { brand: "Samsung", model: "S37", price: "22000" },
    { brand: "realme", model: "S19", price: "20000" },
    { brand: "Mi", model: "M36", price: "28000" }
];

let minimumRangeOfAmountStart = 10000;
let minimumRangeOfAmountEnd = 20000;
let maximumRangeOfAmountStart = 20000;
let maximumRangeOfAmountEnd = 50000;

let brandList = [];
let brandListArray = [];
let mobileGroups = [];

for (i = 0; i < sampleMobilePhoneDetails.length; i++) {
    sampleMobilePhoneDetails[i].brand = sampleMobilePhoneDetails[i].brand.toLowerCase();
    brandList.push(sampleMobilePhoneDetails[i].brand);
}
for (i = 0; i < brandList.length; i++) {
    for (j = i + 1; j < brandList.length; j++) {
        if (brandList[i] == brandList[j]) {
            for (k = j; k < brandList.length - 1; k++) {
                brandList[k] = brandList[k + 1];
            }
            brandList.length = brandList.length - 1;
            j--;
        }
    }
}
for (i = 0; i < brandList.length; i++) {
    let tempbrandArray = new Array();
    let tempbrandArrayMinAmount=[];
    let tempbrandArrayMaxAmount=[];
    for (j = 0; j < sampleMobilePhoneDetails.length; j++) {
        if (brandList[i] == sampleMobilePhoneDetails[j].brand) {
            if ((sampleMobilePhoneDetails[j].price >= minimumRangeOfAmountStart) && (sampleMobilePhoneDetails[j].price <= minimumRangeOfAmountEnd)) {
                tempbrandMinimumAmount = {};
                tempbrandMinimumAmount.model = (sampleMobilePhoneDetails[j].model);
                tempbrandMinimumAmount.price = (sampleMobilePhoneDetails[j].price);
                tempbrandArrayMinAmount.push(tempbrandMinimumAmount);
            }
            if ((sampleMobilePhoneDetails[j].price > maximumRangeOfAmountStart) && (sampleMobilePhoneDetails[j].price <= maximumRangeOfAmountEnd)) {
                tempbrandMaximumAmount = {};
                tempbrandMaximumAmount.model = (sampleMobilePhoneDetails[j].model);
                tempbrandMaximumAmount.price = (sampleMobilePhoneDetails[j].price);
                tempbrandArrayMaxAmount.push(tempbrandMaximumAmount);
            }
        }
    }
    tempbrandArray.push(tempbrandArrayMinAmount={["minimum_range"]:tempbrandArrayMinAmount},tempbrandArrayMaxAmount={["maximum_range"]:tempbrandArrayMaxAmount});
    brandListArray.push(tempbrandArray)
}

for (i = 0; i < brandList.length; i++) {
    for (j = i; j < brandListArray.length; j = j + brandListArray.length) {
        let key = brandList[i];
        let obj = { [key]: brandListArray[j] };
        mobileGroups.push(obj);
    }
}
console.log(mobileGroups);