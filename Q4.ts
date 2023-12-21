//Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function Discount_cal(rate: number): number{
    return rate <= 100 ? (rate / 100) * 5 : (rate / 100) * 10;
}
let rate:number = 50;
if (rate <= 100){
    console.log(`Discount is  ${Discount_cal(rate)}$`);
}
else{
    console.log(`Discount is ${Discount_cal(rate)}$`);
}
