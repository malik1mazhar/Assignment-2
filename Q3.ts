//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function daysToWeeksAndDays(days: number): string {
    const weeks: number = days / 7;
    const wholeWeeks: number = ~~weeks;

    const remainingDays: number = days % 7;

    if (wholeWeeks > 0 && remainingDays > 0) {
        return `${days} days = ${wholeWeeks} weeks and ${remainingDays} days`;
    } else if (wholeWeeks > 0) {
        return `${days} days = ${wholeWeeks} weeks`;
    } else {
        return `${days} days`;
    }
}

const numberOfDays: number = 17;
const result: string = daysToWeeksAndDays(numberOfDays);
console.log(result);

