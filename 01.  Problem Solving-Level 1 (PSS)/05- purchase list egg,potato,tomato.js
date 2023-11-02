/** purchase list */

/** total amount */
let totalAmountGiven = 150;

/** product price */
let perEggPrice = 5, perPotatoPrice = 12, perTomatoPrice = 24;

/** quantity of products */
let eggCountToGet = 12;
let potatoCountInKgToGet = 2;
let tomatoCountInKgToGet = 1;

/** product buying price for each */
let totalEggBuyingPrice = eggCountToGet * perEggPrice;
console.log("egg total price:", totalEggBuyingPrice);
let totalPotatoBuyingPrice = potatoCountInKgToGet * perPotatoPrice;
console.log("potato total price:", totalPotatoBuyingPrice);
let totalTomatoBuyingPrice = tomatoCountInKgToGet * perTomatoPrice;
console.log("tomato total price:", totalTomatoBuyingPrice);

/** tips price */
let tips = 5;

/** total product buying amount */
let totalBuyingAmount = totalEggBuyingPrice + totalPotatoBuyingPrice + totalTomatoBuyingPrice + tips;
console.log("purchasing amt:", totalBuyingAmount);

/** return amount to mom */
console.log("remaining amt:", totalAmountGiven - totalBuyingAmount);