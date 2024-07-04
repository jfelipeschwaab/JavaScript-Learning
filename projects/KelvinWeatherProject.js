const kelvin = 293; //this is the constant of kelvin
let celsius = kelvin - 273; //Im letting the constant celsius be the value of kelvin minus 273
let fahrenheit = celsius * (9/5) + 32; //fahrenheit formula
fahrenheit = Math.floor(fahrenheit); //Im rounding the result of fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)