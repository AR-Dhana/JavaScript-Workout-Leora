let idliAvailable= true;
let sambarAvailable=false;
let dosaAvailable=false;
let chuttnyAvailable = true;

if ((idliAvailable== true)&&(sambarAvailable==true)) {

    console.log("Purchased Idli and Sambar");
}
else if (((idliAvailable==false)&&(sambarAvailable==true))&&((idliAvailable==true)&&(sambarAvailable==false))) {

    console.log("“Purchased Dosa and Chuttny”");
}
else if ((dosaAvailable==true)&&(chuttnyAvailable==true)) {

    console.log("Purchased Dosa and Chuttny");
}
else if (((dosaAvailable==false)&&(chuttnyAvailable==true))&&((dosaAvailable==true)&&(chuttnyAvailable==false))) {
    console.log("Didn't purchase Anything");
}
else 
{
    console.log("Didn't purchase Anything");
}