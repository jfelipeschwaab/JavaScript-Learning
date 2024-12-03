//Módulo 2 Codecademy
//1. Introduction
/*
Geralmente no desenvolvimento web, precisamos lidar com ações assíncronas que podemos esperar enquanto movemos para outras tasks. Fazemos
requests para networks, databases, e muitas outras operações

JavaScript é non-blocking: Ao invés de parar a execução do código enquanto espera, JavaScript usa un event-loop que permite executar outras
tasks enquanto espera a completude dessas ações assíncronas.

Originalmente, JavaScript usava callback Functions para lidar com ações assíncronas. O problema com callbacks é que dificulta demais a leitura
debug e escalabilidade. Com ES6, JavaScript integrou promises nativas que nos permite escrever códigos mais limpos. e no ES8, JavaScript
providenciou uma nova sintaxe para lidar com ações assíncronas, o async...await. o async...await nos permite escrever código assíncrono
*/

//2. The async Keyword
/*
A keyword async é usada para escrever funções que operam assincronamente. Nos colocamos nossa lógica assíncrona dentro da função, que contém
a keyword como prefixo

ex:

async function myFunc() {
    code
}
myFunc()

Também podemos utilizar assim:

const myFunc = async () => {
    
    }

myFunc()


Funções assíncronas sempre retornam uma Promise. Isso significa que podemos utilizar nossa promise syntax normalmente, como .then(), .catch().

Uma função assíncrona retorna uma das tres coisas:

1. Se não tem nada retornando na função, irá retornar uma promise com valor de undefined
2. Se tem um valor non-promise, ou seja, que não seja uma promise, a promise retornanda pela função resolverá naquele valor.
3. Se uma promise é retornada, a função retornará essa promise.

*/

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });


async function withAsync(num) {
    if(num === 0) {
        return 'zero'
    } else {
        return 'not zero'
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})


//3. The await Operator
/*
async functions são muito utilizadas com o adicional da keyword await dentro do corpo da função.

o await keyword pode ser utilizado apenas dentro de uma async function. await é um operator: Ele retorna o valor resolvido de uma promise.
Já que o promises resolvem-se indeterminadas vezes, o await para/pausa a execução da função async até que uma promise seja resolvida

Na maioria das vezes, estamos lidando com promises que são retornadas de funções. Geralmente, essas funções são de libs.

ex:
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
*/
const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
  };

function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
  }
  
  

  async function announceDinner() {
    // Write your code below:
    let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`)
    
  }

announceDinner();

//4. Writing async Functions
/*
A falta do await não impedirá de fato nosso código de rodar, apenas não dará o resultado correto

ex:
async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
*/

const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
     resolve(beanType);
    }, 1000);
  });
  }

function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
  
  getBeans();

async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
  
  getBeans();

//5. Handling Dependent Promises
/*
A verdadeira beleza do async...await, é quando temos uma série de ações assíncronas e depende-se uma das outras. Por exemplo, queremos 
fazer uma network request baseado em uma query para uma database. Nesse caso, precisariamos esperar o network request até termos o resultado
da database

com native Promises, apenas encadeamos:
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}


Com async e await:
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
*/

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);

    console.log(dinner);

}
makeBeans();

//6. Handling Errors
/*
Quando utilizamos .catch(), não há indicação a onde no encadeamento o erro aconteceu, isso pode tornar o processo de debugging complicado.

Com async...await, utilizamos try...catch statements para tratamento de erros.
Utilizando essa sintaxe, não estamos apenas lidando com erros da mesma forma que lidamos com código assíncrono, mas também capturamos
ambos os erros, síncronos ou assíncronos. Isso facilita o processo de debugging!!

ex:
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}

usingTryCatch();
*/

async function hostDinnerParty() {
    try {
        let responseCookBean = await cookBeanSouffle();
        console.log(`${responseCookBean} is served!`)
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!')
    }
}

hostDinnerParty();

//7. Handling Independent Promises
/*
Lembra que o await "pausa" a execução da nossa async function. Isso nos convenientemente escrever synchronous-style code para lidar com 
dependent promises. Mas e se nossa async function conter múltiplas promises que não são dependentes do resultado uma das outras para executar?
EX:

async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}

na primeira função, primeiro espera-se resolver a primeira, para aí sim resolver a segunda
na segunda função, apenas damos o await nas respostas delas, dessa maneira, ambas as operações assíncronas podem ser rodadas simultaneamente,
com async functions temos que tomar vantagem da concurrency, a habilidade de performar ações assíncronas ao mesmo tempo.
*/

async function serveDinner() {
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}`)
}

serveDinner();

//8. Await Promise.all()
/*
Podemos fazer com Promise.all()
*/