//MÓDULO 11 CODECADEMY
//CODE CHALLENGES
// 1. Reverse Array

const reverseArray = (array) => {
    let newArray = [];
    for(let i = array.length - 1; i>= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}


//2. greetAliens
const greetAliens = (aliens) => {
    for(let i = 0; i < aliens.length; i++){
        console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

//3. convertToBaby
//Write a function that takes in an array as argument and
// using a loop. returns a new array with each string in the array prepended with 'baby'
//convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

const convertToBaby = (array) => {
    let newArray = []
    array.forEach(element => {
        newArray.push('baby ' + element);
    });

    return newArray;
}

//Fix the Broken Code!
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             k = 1;
            while (k < number) {
                  k = k * 2;
            }
            results.push(k);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

//4. declineEverything and acceptEverything()
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = veg => {
    console.log('No ' + veg +' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
    arr.forEach(politelyDecline);
}

declineEverything(veggies);

const acceptEverything = arr => {
    arr.forEach(element => {
        console.log(`Ok, I guess I will eat some ${element}.`);
    })
}

acceptEverything(veggies);


//5. squareNums()

const numberss = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare)

console.log(squareNums(numberss));

//6. shoutGreetings

const shoutGreetings = arr => {
    let newArray = [];
    arr.forEach(element => {
        newArray.push(element.toUpperCase() + "!");
    });
}

//7. sortYears();

const sortYears = arr => {
    let newArr = arr.sort();
    return newArr.reverse();
}

//8. justCoolStuff();

const justCoolStuff = (arr1, arr2) => {
    let newArr = []
    for (let index = 0; index < array.length; index++) {
        if( arr2.includes(arr1[index])){
            newArr.push(arr1[index]);
        }
    }
    return newArr;
}

/* CODECADEMY SOLUTION:
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))
*/

//9. IStheDinnerVegan()

const istheDinnerVegan = arr => {
    let isVegan = true;
    arr.forEach(element => {
        if(arr.source != 'plant'){
            isVegan = false;
        }else{
            isVegan = true;
        }
    });
    return isVegan;
}

//10. sortSpeciesByTeeth()
const sortSpeciesByTeeth = (speciesArray) => {
    return speciesArray.sort((a, b) => a.numTeeth - b.numTeeth);
};

/* Aprendizado legal, sort funciona da seguinte forma, veja que foram passados a e b como valores a serem
comparados, e ele faz a - b, para comparar, caso a - b de um valor negativo, a vem antes de b, se der 0, ambos sao iguais, e se der positivo
a vem depois de b. */

//11. findMyKeys()

const findMyKeys = (arr) => {
    return arr.indexOf('keys');
};

//12. dogFactory()
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,

        get name() {
            return this._name;
        },
        set name(newName) {
            if (typeof newName === 'string') {
                this._name = newName;
            } else {
                console.log('Name must be a string');
            }
        },

        get breed() {
            return this._breed;
        },

        set breed(newBreed) {
            if (typeof newBreed === 'string') {
                this._breed = newBreed;
            } else {
                console.log('Breed must be a string');
            }
        },

        get weight() {
            return this._weight;
        },

        set weight(newWeight) {
            if (typeof newWeight === 'number') {
                this._weight = newWeight;
            } else {
                console.log('Weight must be a number');
            }
        },

        bark() {
            return 'ruff! ruff!';
        },

        eatTooManyTreats() {
            this._weight += 1;
        }
    };
};
let dog =dogFactory('Joe', 'Pug', 27)
console.log(dog)
