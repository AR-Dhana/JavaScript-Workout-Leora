let customerDetails = {
    customerName: 'vishon', membershipLevel: 'platinum',
    purchasedList: [{ productName: 't-shirt', priceInDollers: 15, purchasedQty: 2 },
    { productName: 'jeans', priceInDollers: 30, purchasedQty: 1 },
    { productName: 'salwar', priceInDollers: 12, purchasedQty: 3 }]
};
function purchasingPriceCalculation() {
    let purchasingPrice;
    let totalPurchasingPrice=0;
    let totalPurchasingPriceWithMembershipDiscount;
    let totalCost;
    let commonTaxPercentage=8;
    for(i=0;i<customerDetails.purchasedList.length;i++){
        purchasingPrice=customerDetails.purchasedList[i].priceInDollers*customerDetails.purchasedList[i].purchasedQty;
        totalPurchasingPrice=totalPurchasingPrice+purchasingPrice;
    }
    if(customerDetails.membershipLevel=='platinum'){
        let discountPercentage=10;
        totalPurchasingPriceWithMembershipDiscount=totalPurchasingPrice-((totalPurchasingPrice/100)*discountPercentage);
    }
    else if(customerDetails.membershipLevel=='gold'){
        let discountPercentage=5;
        totalPurchasingPriceWithMembershipDiscount=totalPurchasingPrice-((totalPurchasingPrice/100)*discountPercentage);
    }
    else if(customerDetails.membershipLevel=='silver'){
        let discountPercentage=3;
        totalPurchasingPriceWithMembershipDiscount=totalPurchasingPrice-((totalPurchasingPrice/100)*discountPercentage);
    }
    else{
        let discountPercentage=1;
        totalPurchasingPriceWithMembershipDiscount=totalPurchasingPrice-((totalPurchasingPrice/100)*discountPercentage);
    }
    totalCost=totalPurchasingPriceWithMembershipDiscount+((totalPurchasingPriceWithMembershipDiscount/100)*commonTaxPercentage);
    return totalCost;
}
console.log(purchasingPriceCalculation());