//Develop a program that determines the day of the week. Ask the user for a number (1-7) and 
//use nested if statements to print the corresponding day's name.
function Day_Check(Din: number): string {
    if (Din >= 1 && Din <= 7) {
        if (Din === 1) {
            return "Monday";
        } else if (Din === 2) {
            return "Tuesday";
        } else if (Din === 3) {
            return "Wednesday";
        } else if (Din === 4) {
            return "Thursday";
        } else if (Din === 5) {
            return "Friday";
        } else if (Din === 6) {
            return "Saturday";
        } else if (Din === 7) {
            return "Sunday";
        }
    }

    return "Invalid input. Please choose a number between 1 and 7.";
}

let Din: number = 3;
let my_day: string = Day_Check(Din);
console.log(my_day);
