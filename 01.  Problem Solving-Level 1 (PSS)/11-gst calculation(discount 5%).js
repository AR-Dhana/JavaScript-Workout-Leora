/** gst calculation */

/** product amount details */
let productPrice=200;
let productGstPercent=10;
let productDiscount=5;

/** product discount price calculation */
let productDiscountPrice=productPrice*productDiscount/100;

/** buying product GST amount calculatoin */
let productGstAmount=productPrice*productGstPercent/100;

/** applying GST amount to buying product */
let productPriceWithGst=productGstAmount+productPrice;

/** final amount to pay */
let finalProductPrice=productPriceWithGst-productDiscountPrice;

console.log("productGstAmount",productGstAmount);

console.log("productDiscount",productDiscountPrice);

console.log("productPriceWithGst",productPriceWithGst);

console.log("finalProductPrice",finalProductPrice);