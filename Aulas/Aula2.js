//Módulo 2 Codecademy
//Creating a variable
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//let
let changeMe = true; //Can be changed, because its a let variable
changeMe = false;
console.log(changeMe);

//const
const entree='Enchiladas';
console.log(entree);
entree = 'Tacos'; //It would throw a error, const variables can´t be changed

//Mathematical Assignments
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

//Increment and Decrement operators
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar --;  //gainedDollar would increase to 4 and lostDollar would be decreased to 49;

//String Concatenation with variables
let favoriteAnimal = 'lion';
console.log('My favorite animal: ' + favoriteAnimal); //Concatena a string com uma variável, possivel em Javascript

//String Interpolation
let myName = 'João';
let myCity = 'New York';
console.log(`My name is ${myName}. My favorite city is ${myCity}`); //Nas interpolações myName e myCity, seriam substituídos pelas respectivas variáveis

//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); //typeof é utilizado para ter conhecimento de qual tipo de variável estamos utilizando
newVariable = 1;
console.log(typeof newVariable);

