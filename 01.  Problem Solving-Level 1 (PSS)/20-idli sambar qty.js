let idliAvailable= false;
let idliQty=5;
let sambarAvailable=true;
let dosaAvailable=true;
let dosaQty=2;
let chuttnyAvailable = false;

if ((idliAvailable== true)&&(sambarAvailable==true)&&(idliQty>=5)) {

    console.log("Purchased Idli and Sambar");
}
else if (((idliAvailable==false)&&(sambarAvailable==true)&&(idliQty>=5))&&((idliAvailable==true)&&(sambarAvailable==false)&&(idliQty>=5))) {

    console.log("“Purchased Dosa and Chuttny”");
}
else if ((dosaAvailable==true)&&(chuttnyAvailable==true)&&(dosaQty>=2)) {

    console.log("Purchased Dosa and Chuttny");
}
else if (((dosaAvailable==false)&&(chuttnyAvailable==true)&&(dosaQty>=2))&&((dosaAvailable==true)&&(chuttnyAvailable==false)&&(dosaQty>=2))) {

    console.log("Didn't purchase Anything");
}
else 
{
    console.log("Didn't purchase Anything");
}