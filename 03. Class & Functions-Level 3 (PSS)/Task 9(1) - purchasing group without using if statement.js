let sampleMobilePhoneDetails = [{ brand: "Samsung", model: "S10", price: "10000" },
{ brand: "Lava", model: "O10", price: "9000" },
{ brand: "iPhone", model: "i10", price: "60000" },
{ brand: "Oneplus", model: "O30", price: "19000" },
{ brand: "Mi", model: "M20", price: "13000" },
{ brand: "Oppo", model: "O20", price: "14000" },
{ brand: "MicroMax", model: "i20", price: "80000" },
{ brand: "Samsung", model: "S30", price: "22000" },
{ brand: "Mi", model: "M30", price: "18000" },
{ brand: "Nokia", model: "O30", price: "19000" },
{ brand: "Vivo", model: "O30", price: "19000" },
{ brand: "iPhone", model: "i30", price: "90000" }];

let mobileGroups = {};
let samsungGroups = [];
let lavaGroups = [];
let iphoneGroups = [];
let oneplusGroups = [];
let miGroups = [];
let oppoGroups = [];
let micromaxGroups = [];
let nokiaGroups = [];
let vivoGroups = [];

for (i = 0; i < sampleMobilePhoneDetails.length; i++) {
    sampleMobilePhoneDetails[i].brand = sampleMobilePhoneDetails[i].brand.toLowerCase();
}
for (i = 0; i < sampleMobilePhoneDetails.length; i++) {
    switch (sampleMobilePhoneDetails[i].brand) {
        case 'samsung':
            samsungGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'lava':
            lavaGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'iphone':
            iphoneGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'oneplus':
            oneplusGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'mi':
            miGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'oppo':
            oppoGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'micromax':
            micromaxGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'nokia':
            nokiaGroups.push(sampleMobilePhoneDetails[i]);
            break;
        case 'vivo':
            vivoGroups.push(sampleMobilePhoneDetails[i]);
            break;
    }
}
mobileGroups.samsungGroups = samsungGroups;
mobileGroups.lavaGroups = lavaGroups;
mobileGroups.iphoneGroups = iphoneGroups;
mobileGroups.oneplusGroups = oneplusGroups;
mobileGroups.miGroups = miGroups;
mobileGroups.oppoGroups = oppoGroups;
mobileGroups.micromaxGroups = micromaxGroups;
mobileGroups.nokiaGroups = nokiaGroups;
mobileGroups.vivoGroups = vivoGroups;
console.log(mobileGroups);