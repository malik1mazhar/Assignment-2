//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse. 
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}


// Convert Celsius to Fahrenheit
let celsiusTemperature: number = 25;
let convertedFahrenheit: number = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature} degrees Celsius is ${convertedFahrenheit} degrees Fahrenheit`);

// Convert Fahrenheit to Celsius
let fahrenheitTemperature: number = 77;
let convertedCelsius: number = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature} degrees Fahrenheit is ${convertedCelsius} degrees Celsius`);
