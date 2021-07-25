//sets the temperature in kelvin
const kelvin = 293;

//converts the temperature to Degree Celsius
const celsius = kelvin - 273;

//converts the temperature to fahrenheit
let fahrenheit = celsius * (9/5) + 32

//floors fahrenheit value to the nearest whole number
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = celsius * (33 / 100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees newton`)