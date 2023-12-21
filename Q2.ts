//Write a program that calculates the percentage
function percentage_Calculator(marks: number, Totalmarks:number): number{
    return(marks / Totalmarks * 100)
}
let marks:number = 297;
let Totalmarks:number = 527;
let percentagee:number = percentage_Calculator(marks, Totalmarks)
console.log(`${marks} is ${percentagee}% of ${Totalmarks}`)