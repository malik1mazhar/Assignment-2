//- Write a program that checks if the given year is leap year or not.
function Leap_Year (Given_Year:number):string{
    if (Given_Year % 4 === 0 && Given_Year % 100 !== 100 || Given_Year % 400 === 0){
        return "Leap Year";
    }
    else{
        return "Not a Leap Year";
    }
}
let Given_Year:number = 2025;
let my_result = Leap_Year(Given_Year);
console.log(my_result)