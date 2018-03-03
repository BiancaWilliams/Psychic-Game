// will not change therefore variable is constant
const kelvin = prompt('What is the Kelvin temperature today?');
// kelvin minus 273  equals celcius
const celsius = kelvin - 273;
let fahrenheit =  celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ${fahrenheit} degrees fahrenheit.');
