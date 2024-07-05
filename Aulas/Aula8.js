//Módulo 8 Codecademy
//1. Introduction to Objects
//Existem apenas 7 data types em JavaScript: string, number, boolean, null, undefined, symbol e objects.
//Com objetos, abrimos o leque de possibilidades para códigos mais complexos
//Podemos usar objetos para modelar coisas reais, do mundo real.
//Javascript Objects são como containers guardando informações e funcionalidades.




//2. Creating Object Literals
//Objetos podem ser assinalados à variáveis, assim como qualquer dataType, usa-se {} para designar-se um object literal
//Nós preenchemos esse objeto com pares de chave:valor. A chave é uma varíavel que aponta para a localização na memória, que vai conter o valor.
//O valor da chave pode ser de qualquer tipo, incluindo funções e até os próprios objetos
/*Faz-se o Key:value escrevendo-se o nome da chave, ou o identifier, seguido por dois pontos :, e o valor logo em seguida, separa-se cada
key:value pair com vírgulas. Chaves são em sua maioria strings
ex: 
let spaceship = {
    'Fuel type': 'diesel',
    'color': 'silver'
};*/
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'  //se não temos nenhum caracter especial, ou espaço na key, o JavaScript nos permite omitir as quotation marks ' '
  }


//3. Acessing Properties
//Há duas maneiras de acessar uma propriedade do objeto, a primeira delas é o ponto .
//Se tentamos acessar uma propriedade que não existe, recebemos o valor undefined

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };

let crewCount = spaceship.numCrew; //Outputs 5
let planetArray = spaceship.flightPath //Outputs ['Venus', 'Mars', 'Saturn']



//4. Bracket Notation
/*A segunda maneira de acessar a key's value, ou uma propriedade, é usando Bracket Notation []
utilizamos BracketNotation quando vamos acessar um index de um array
por exemplo: ['A','B','C'][0]; //Outputs A, ['A','B','C'][1]; //Outputs B...*/
//Para fazer isso, nos acessamos a chave da propriedade dentro da Bracket Notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
let propName =  'Active Mission';

let isActive = spaceship['Active Mission']; //Outputs true
console.log(spaceship[propName]); //Outputs true, que é o valor atribuído à 'Active mission'


//5. Property Assignment
/* Uma vez que definimos um objeto, não estamos presos com as mesmas propriedades que escrevemos, Objetos são mutáveis,
o que significa que podemos atribuir novas propriedades mesmo depois de cria-los

Podemos fazer isso com dot notation ., ou bracket Notation [], e o assignment operator =, para adicionar uma nova key-value pair 
para nosso objeto

ex: spaceship['Fuel Type'] = 'vegetable oil'; //Usando Bracket Notation
ex: spaceship.color = 'gold' //Usando dot Notation

É importante saber que, mesmo que não possamos reassinar um objeto declarado como const, nós ainda conseguimos mudar ele, ou seja
atribuir novas propriedades e mudar as propriedades que ali estão
Ex:

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Muda o valor da propriedade
spaceship.speed = 'Mach 5'; // Cria uma nova chave 'speed' com o valor de 'Mach 5' 


Você também pode deletar uma propriedade de um objeto com o delete operator
ex:

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
delete spaceship.mission;  // Removes the mission property
*/

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };

spaceship.color = 'glorious gold' //Atribuindo um novo valor À color
spaceship['numEngines'] = 10; //Criando uma nova propriedade
delete spaceship['Secret Mission']; //Deletando uma propriedade existente



//6.Methods
/* Quando uma informação guardada em um objeto é uma função, o chamamos de method. Uma diferenciação a se notar é, uma propriedade é o que o
objeto têm/é, um Method é o que o Objeto Faz.

Um exemplo de Method é o .log() de console.log(), console é um Objeto Global do JavaScript, .log() é um Method desse objeto
Outro exemplo é o Math, Math é um objeto, .floor() é Seu Method
ex:

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

Com a nova sintaxe introduzida com o ES6, podemos omitir os : e a function keyword
ex:
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

Object Methods são chamados da mesma forma do console.log(), primeiro o nome do objeto, no caso alienShip, logo após, o dot operator
e o nome do Method seguido com Parênteses, por ser uma função, finalizando:
alienShip.invade() //Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
    retreat: function () {
      console.log(retreatMessage); //Usando : 
    },
    takeOff () {
      console.log('Spim... Borp... Glix... Blastoff!'); //Sem usar :
    }
  };

alienShip.retreat(); //Outputs the retreatMessage
alienShip.takeOff(); //Outputs the takeOff message


//7.Nested Objects
/* No código, objects são em sua maioria nested, ou seja, Objetos têm como propriedades outros objetos que têm outros objetos como propriedade,
isso nos dá uma infinita possibilidade de código

Por exemplo, no nosso objeto spaceship, queremos um crew object, que terão propriedades como nome e certificação. Queremos também outro objeto
que será o telescope, outor objeto com o modelo da máquina, outro objeto com as propriedades dos computadores, nota-se como as possibilidades
são infinitas

Ex: const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         }

Mas como acessar uma propriedade profunda? como por exemplo, o terabytes do computer? que está dentro de nanoelectronics, que está dentro de spaceship
Simples, nós encadeamos o seu chamado
ex:
spaceship.nanoelectronics['computer'].terabytes //Outputs 100, que é o valor de terabytes */

let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0]

spaceship.passengers = [] //Inicializando essa propriedade que antes estava nulo
spaceship.passengers['Passenger One'] = {
    name: 'maicon',
    cellphone: 'Iphone 15',
    money: 250
  }; //Adicionando um tripulante


console.log(spaceship.passengers['Passenger One']); //Outputs name, cellphone e money



//8.Pass By Reference
/* Objetos são passados por referência, isso significa que se passarmos uma variável assinalada com um objeto para uma função como parâmetro
o computador interpreta o nome daquele parâmetro apontando para o espaço reservado na memória que está guardando aquele objeto. Como resultado,
se nossa função mudar algum parâmetro, também será mudado no Objeto original (mesmo se assinalado com const)
ex: 
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'  */
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
  
  
const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};
  
const remotelyDisable = obj => {
    obj.disabled = true;
};
  
greenEnergy(spaceship); //Chama a função e troca a propriedade do objeto
remotelyDisable(spaceship);//Chama a função e troca a propriedade do objeto
  
console.log(spaceship); //Outputs {'Fuel type': 'avocado oil', homePlanet = 'Earth', disabled = true}


//9. Looping through Objects
/* Aprendemos a iterar sobre arrays, usando numerical indexing, mas os pares de Chave:Valor não estão ordenados, para isso, o JavaScript
nos deu uma solução alternativa para iterar sobre os objetos, o for... in.

O for...in vai executar um dado bloco de código para cada propriedade em um objeto

Ex:
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`); //Acessando o nome do passageiro
} */

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for(let crewMember in spaceship.crew){
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  } //Outputs: captain: Lily, chief oficcer: Dan, medic: Clementine, translator: Shauna
  
  for(let crewMember in spaceship.crew){
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
  }//Outputs Lily: Computer Engineering, Dan: Aerospace Engineering, Clementine: Physics, Shauna: Conservation Science