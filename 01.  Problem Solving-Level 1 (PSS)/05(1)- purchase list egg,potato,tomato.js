let momGivenAmount=150;
let eggPrice=5,potatoPriceForKg=12,tomatoPriceForKg=24;
let eggQty=12;
let potatoQtyInKg=2;
let tomatoQtyInKg=1;
let eggByingAmount=eggQty*eggPrice;
let potatoByingAmount=potatoQtyInKg*potatoPriceForKg;
let tomatoByingAmount=tomatoQtyInKg*tomatoPriceForKg;
let tips=5;
let totalPurceAmount=eggByingAmount+potatoByingAmount+tomatoByingAmount+tips;
console.log("egg total price:",eggByingAmount);
console.log("potato total price:",potatoByingAmount);
console.log("tomato total price:",tomatoByingAmount);
console.log("purchasing amt:",totalPurceAmount);
console.log("remaining amt:",momGivenAmount-totalPurceAmount);