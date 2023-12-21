//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible 
//by anyone show output accordingly.
function div_check(div_a:number):string{
if (div_a % 3 === 0 && div_a % 5 ===0){
    return "Number is divisible by both 3 & 5";
}
else if(div_a % 3 === 0){
    return "Number is divisible by 3";
}
else if (div_a % 5 === 0){
    return "Number is divisible by 5";
}
else{
    return "Number is not divisible by any of 3 & 5";
}
}
let div_a:number = 13;
let rexultx = div_check(div_a);
console.log(rexultx)