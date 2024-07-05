//Módulo 9 Codecademy
//1. The this Keyword
/* Ex:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined", mas estranho, porquê dietType está definido, isso acontece porquê dentro do escopo
de .diet() nós não temos acesso automático às propriedades do objeto goat

Aqui é aonde o this entra
ao invés de diet() {
console.log(dietType)
}

usariamos:
diet(){
console.log(this.dietType)
}
o this referencia o objeto que está sendo chamado, o que nos permite usar suas propriedades */
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo () {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo()); //Outputs the phrase provideInfo()


//2. Arrow Functions and this
//Vimos que ao digitar this, estamos chamando o objeto, mas ao usar arrow functions, se torna um pouco mais complicado.
/* Ex:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

isso ocorre porque as arrow functions já determinam um valor pré-setado para o this
a saída para isso é, simplesmente não usando arrow functions quando usar o this


3. Privacy
As vezes não queremos que acessem uma propriedade ou um método, ou seja, apenas alguns metodos e propriedades devem ser mutáveis, outros não
Algumas linguagens têm métodos só pra isso, contudo, Javascript não tem essa Feature, logo, há uma convenção entre os dev´s de sempre
nomear com _ as variavéis que não devem ser mutáveis

ex:
const bankAccount = {
  _amount: 1000
}

4.Getters
Getters são métodos que pegam e retornam propriedades internas de um objeto, mas eles não podem fazer mais que retornar o valor da propriedade
ex:  
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

person.fullName; // 'John Doe'*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel (){
      if(typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}.`
      }else{
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
console.log(robot.energyLevel) //Note que não estou usando o (), Outputs 'My current energy level is 100'
  
//5.Setters
/* Assim como temos o getter Methods, podemos criar os setters methods, que reassinalam valores de propriedades existentes
ex: 
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
}; */
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.';
      }
    },
    set numOfSensors(num) {
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      }else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
    
  };
  
robot.numOfSensors = 100;
console.log(robot._numOfSensors);
  
  
  
//6. Factory Functions
/* Até então estamos criando Objetos individualmente, as vezes queremos criar várias instâncias desse objeto, aqui onde entra as 
Factory Functions, as factory functions são funções que retornam um objeto e podem ser reutilizadas para fazerem múltiplos objetos
ex:
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
}; */
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep () {
        console.log('Beep Boop');
      }
    }
  }
  
const tinCan = robotFactory('P-500', true);
tinCan.beep()


//7.Property Value Shorthand
// Ao invés de ter que declarar duas vezes na criação de um objeto, declara-se apenas a chave, isso foi uma implementação do ES6
const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  

const newRobot = robotFactory('P-501', false)
console.log(newRobot.model) //Outputs 'P-501'
console.log(newRobot.mobile)//Outputs false

//8.Destructured Assignment
/*
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'
//Ao invés disso, utilizamos o Destructured Assignment:
//No Destructured Assignment, criamos a variável com o nome da chave do objeto, e assign com o objeto

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania' */

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
const { functionality } = robot;
functionality.beep();
  

//Built-in Object Methods
/*Conseguimos tirar vantagem de built-in Methods para objects
por exemplo, .hasOwnProperty(), .valueOf() e muitos mais!

Alguns úteis como object.assign(), object.entries() e object.keys() */
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys); //outputs [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]


const robotEntries = Object.entries(robot)
console.log(robotEntries); 
/*
Outputs [ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ] */


const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
/*Outputs { laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 } */


