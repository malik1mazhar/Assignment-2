//Write a program that takes the number of units consumed by a user if it is greater than 100 
//then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 
//25% of tax Where the tax amount will be calculated by the amount of bill. 
function Tax_Check(unit: number): number {
if (unit <= 200 && unit >=1){
    return (unit / 100) * 10;
} 
else if (unit >= 201 && unit <= 500){
    return (unit / 100) * 15;
}
else{
    return (unit / 100) * 25;
}
}
let unit:number = 235;
let my_tax = Tax_Check(unit);
console.log(`Tax is  ${my_tax} units`)