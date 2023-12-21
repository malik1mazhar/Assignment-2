//Create a program that determines the category of a user-provided age. If the age is between 0 
//and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
function Age_Cal(age:number): string{
    if (age >= 0 && age <=12){
        return "Child";
    }
    else if (age >=13 && age <=19){
        return "Teenager";
    }
    else{
        return "Adult";
    }
}
let age:number = 25;
let resultx = Age_Cal(age);
console.log(resultx)