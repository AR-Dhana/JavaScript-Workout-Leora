let sampleMobilePhoneDetails=[{brand:"Samsung", model:"S10", price:"10000"},
{brand:"Lava", model:"O10", price:"9000"},
{brand:"iPhone", model:"i10", price:"60000"},
{brand:"Oneplus", model:"O30", price:"19000"},
{brand:"Mi", model:"M20", price:"13000"},
{brand:"Oppo", model:"O20", price:"14000"},
{brand:"MicroMax", model:"i20", price:"80000"},
{brand:"Samsung", model:"S30", price:"22000"},
{brand:"Mi", model:"M30", price:"18000"},
{brand:"Nokia", model:"O30", price:"19000"},
{brand:"Vivo", model:"O30", price:"19000"},
{brand:"iPhone", model:"i30", price:"90000"}];

let mobileGroups={};
let samsungGroups=[];
let lavaGroups=[];
let iphoneGroups=[];
let oneplusGroups=[];
let miGroups=[];
let oppoGroups=[];
let micromaxGroups=[];
let nokiaGroups=[];
let vivoGroups=[];

for(i=0;i<sampleMobilePhoneDetails.length;i++){
    sampleMobilePhoneDetails[i].brand=sampleMobilePhoneDetails[i].brand.toLowerCase();
}
// price below or equal to 10000 //
for(i=0;i<sampleMobilePhoneDetails.length;i++){
    if(sampleMobilePhoneDetails[i].price<=10000){
        console.log(sampleMobilePhoneDetails[i]);
    }
}
// brandwies grouping //
for(i=0;i<sampleMobilePhoneDetails.length;i++){
    if(sampleMobilePhoneDetails[i].brand=='samsung'){
        samsungGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='lava'){
        lavaGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='iphone'){
        iphoneGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='oneplus'){
        oneplusGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='mi'){
        miGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='oppo'){
        oppoGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='micromax'){
        micromaxGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='nokia'){
            nokiaGroups.push(sampleMobilePhoneDetails[i]);
    }
    else if(sampleMobilePhoneDetails[i].brand=='vivo'){
        vivoGroups.push(sampleMobilePhoneDetails[i]);
    }
}
mobileGroups.samsungGroups=samsungGroups;
mobileGroups.lavaGroups=lavaGroups;
mobileGroups.iphoneGroups=iphoneGroups;
mobileGroups.oneplusGroups=oneplusGroups;
mobileGroups.miGroups=miGroups;
mobileGroups.oppoGroups=oppoGroups;
mobileGroups.micromaxGroups=micromaxGroups;
mobileGroups.nokiaGroups=nokiaGroups;
mobileGroups.vivoGroups=vivoGroups;
console.log(mobileGroups);