//Write a program that takes temperature and check it. If it is cold then suggest the user to wear 
//warm clothes and so on according to the weather. 
function Temp_cal(Tempr:number): string{
    if (Tempr <= 20){
        return "Wear warm clothes";
    }
        else{
            return "Wear summer clothes";
        } 
}
let Tempr:number = -5;
let rexult = Temp_cal(Tempr);
console.log(rexult);