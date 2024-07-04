//Módulo 6 CodeCademy
//ITERATORS

//The forEach() method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function theFruit(fruit){         //por cada item do array, utilizara esse item como parâmetro da função callback do método forEach
  console.log(`I want to eat a ${fruit}`);
})
 //Using Arrows functions
fruits.forEach(groceryItem => console.log(groceryItem));




//The map() method
//Percorre-se por cada item do array, adicionando-o no novo array, modificando o item ou não

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(word => word[0]);  //Usando Arrow Function
//ou
const secretMessage2 = animals.map(function newMessage(word){ //usando Function Expression
  return word[0];
})

console.log(secretMessage2.join(''));
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(div => div/100);
//or
const smallNumbers2 = bigNumbers.map(function(num){
  return num/100;
})
console.log(smallNumbers);
console.log(smallNumbers2)


//The .filter() Method
/*Percorre-se pelo array, filtrando cada item, a funçã callBack que será passada para o .filter() deve retornar um 
valor de true ou false*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbersFilterLesson = randomNumbers.filter(num => num < 250 ); //Checa se o valor é menor que 250
console.log(smallNumbersFilterLesson);
//Outputs [200, 3.14, 7, 13]


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(char => char.length > 7);  //Checa se a palavra tem mais de 7 letras

console.log(longFavoriteWords);
//Outputs ['nostalgia', 'hyperbole', 'esoteric']


//The .findIndex() method
/*Percorre-se pelo array, procurando o Index do primeiro item que bater com a condição estabelecida, por exemplo
se quero o index do primeiro numero que for menor que 10.*/

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => animal ==='elephant');
//Outputs 7, that is the index of 'elephant'

const startWithS = animals2.findIndex(animal => animal[0] === 's');

console.log(startWithS);
//Outputs 3, that is the Index of seal



//The .reduce() method
//Ele itera sobre todos as posições do array, somando-as até se tornar um único elemento
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

const numbers2 = [1, 2, 4, 10];

const summedNums2 = numbers2.reduce((accumulator2, currentValue2) => {
  return accumulator2 + currentValue2
}, 100)  // <- Second argument for .reduce(), estou iniciando o argumento como 100

console.log(summedNums2); // Output: 117

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum)



