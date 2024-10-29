//Módulo 1 JavaScript Assync Programming
//1. What is a promise?

/*
Promisses são objetos que representam um eventual outcome de uma operação assíncrona, Um objeto Promise pode estar em 3 estados:

1 - Pending: O estado inicial, a operação ainda não foi completada
2 - Fulfilled: A operação foi completada com sucesso e a promise agora tem um valor resolvido. Por exemplo, uma promessa de uma request
geralmente resolve-se em um objeto JSON como seu valor
3 - Rejected: A operação falhou e a promise tem uma razão para ter dado uma falha.

*/


//2. Constructing a Promise Object
/*
Para criar um Promise Object, usamos a keyword new e o Promise constructor Method

ex:

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

O promise constructor leva uma função como parâmetro, chamada de função executora

a função executora geralmente starta uma operação assíncrona e dita como a promisse deve ser setada.

A função executora deve ter dois parâmetros, usualmente referidas como resolve() e reject() functions.

a função resolve() e reject() não são definidas pelo programador, quando um construtor Promise() é chamado,
o próprio JAVASCRIPT implementa esses dois parâmetros na função

resolve é uma função com apenas 1 argumento. debaixo dos panos, se invocada, resolve() vai mudar o estado da promise
de pending para fulfilled, e o valor resolvido da promise será passado para o argumento setado como parâmetro.

reject é uma função que recebe uma razão ou erro como argumento, por debaixo dos panos, se invocada, reject() irá mudar
o status de pending para rejected, e a razão será passada para o argumento passado para o reject()


ex:
const executorFunction = (resolve, reject) => {
 if (someCondition) {
     resolve('I resolved!');
 } else {
     reject('I rejected!'); 
 }
}
const myFirstPromise = new Promise(executorFunction);

*/
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };

let myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0) {
        resolve('Sunglasses order processed');
    }else{
        reject('That item is sold out.');
    }
}

let orderSunglasses = () => {
    return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();
console.log(orderPromise);


//3. The Node setTimeout() Function
/*
Saber como construir uma promise é útil, mas, na maioria das vezes, saber como consumir ou usar as promises, isso sim é
a chave. Mais que construindo promises, você irá lidar com objetos de promessas retornados para você como resultado de 
operações assíncronas. Essas promises irão começar pending mas irão ser resolvidas eventualmente.

Movendo à frente, iremos simular isso com funções que retornam promises que resolvem após algum tempo. Para fazer isso
iremos utilizar setTimeout(). setTimeout() é uma Node API que utiliza de callbacks functions para schedulizar tarefas que serão 
performadas após um delay. setTimeout() têm dois parâmetros: uma função callback e um delay em milisegundos

ex:

const delayHello = () => {
        console.log("Delayed Hello!");
            }


setTimeout(delayHello, 2000);

Nesse exemplo, invocamos o setTimeout com a função delayHello e 2000. em pelo menos 2 segundos delayHello será chamada.
Mas porquê em pelo menos 2 segundos e não 2 segundos exatos??
esse delay é performado assíncronamente, ou seja, o resto do programa não parará de ser executado durante o delay. Asyncronous JavaScript
usa algo chamado event-loop. Após dois segundos, delayHello() é adicionada ao resto do código esperando para ser executado. Antes de rodar
qualquer código síncrono será rodado. Depois, qualquer código na frente dele será rodado. Isso significa que demora mais de 2 segundos para
delayHello() ser executado.

Dê uma olhada de como faremos para executar o setTimeout para construir assyncronous promises:

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();


*/

const usingSTO = () => {
    console.log("HELLO WORLD!");
}

setTimeout(usingSTO, 3000);

console.log("This is the last line of code in app.js.");


//4. Consuming Promises
/*
O estado inicial de uma promise é pending, mas temos uma garantia que será resolvida. Como falamos para o computador o que 
deve acontecer depois? Objetos Promises vem com um aptly nomeado .then() method. Nos permite dizer que, "Eu tenho uma promise,
quando ela ser resolvida, quero que isso aconteça"

.then é uma high-order function -> Ela têm duas funções callbacks como argumentos, referimos à esses callbacks como handlers. Quando a 
promise é resolvida, o handler apropriado será invocado com o valor resolvido

o primeiro, as vezes chamado de onFulFilled, é um handler de sucesso, e deve conter a lógica para a promise se resolvendo.

o segundo, as vezes chamado de onReject, é um handler de falha, e deve conter a lógica da rejecting promise

Podemos invocar .then() com uma, ambas ou nenhum handler! isso permite flexibilidade, mas também pode ser dificil para debugging, pois,
ao invés de lançar um erro, .then() irá retornar apenas uma promise com o mesmo valor resolvido que a promise chamada.

Uma coisa importante do .then() é que ele sempre retorna uma promise
*/

//5. Success and Failure CallBack Functions
/*
Para manusear uma promise de sucesso, ou uma promise resolvida, invocamos o .then() na promise, passando um sucess handler callback function:

ex:
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'

Nós não sabemos se uma promise irá se resolver ou ser rejeitada, então precisamos providenciar a lógica para os dois casos.
Podemos passar ambas as funções callbacks para o .then()

ex:
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
*/
const inventory2 = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory2[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (failureValue) => {
  console.log(failureValue);
}

checkInventory(order).then(handleSuccess, handleFailure)

//6. Using catch() with Promises
/*
Uma forma de escrever códigos mais limpos é seguir um princípio chamado separação de preocupações, esse princípio baseia-se em organizar
o código de forma que cada seção lide com uma task específica. Isso nos permite navegar pelo código e achar fácilmente o que procuramos.

Lembre-se, then() irá retornar uma promise com o mesmo valor resolvido se nenhum event handler apropriado for providenciado.
Essa implementação nos permite separar nossa lógica de resolução da nossa lógica de rejeição

Ao invés de passar ambos os handlers em um then(), podemos encadear um segundo then() com o failure handler no primeiro then() que contém o
case de sucesso da operação:

ex:
prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
 })
 .then(null, (rejectionReason) => {
   console.log(rejectionReason);
 });


Já que JavaScript não liga para espaços vazios, há uma convenção de deixar cada parte do código em uma nova linha para ser mais fácil
de ler. Para criar um código ainda mais legível, podemos usar uma função Promise diferente: .catch()

o .catch() recebe apenas um argumento, onRejected. No caso de uma promise rejeitada, esse failure handler vai ser invocado com a razão
da rejeiçã. Usar o .catch() é a mesma coisa que o usar o .then() com o failure handler apenas.


ex:
prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
 })
 .catch((rejectionReason) => {
   console.log(rejectionReason);
 });

*/

checkInventory(order)
.then(handleSuccess)
.catch(handleFailure)

//7. Chaining Multiple Promises
/*
Um padrão comum de se ver com a programação assíncrona é as múltiplas 
operações que dependem uma da outra para serem executadas, e devem ser
executadas em uma respectiva ordem

Podemos utilizar um request para a database para usar o request da database
retornado para nós para fazer outro request

ex:
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
*/

const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory2 = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

const order2 = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory2(order2)
.then((resolvedValueArray) => {
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
  
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

//8. Avoiding Commom Mistakes
/*
Composições Promises nos permite códigos muito mais legíveis que nested
callback syntax. Entretanto, é fácil de cometer erros

Erro 1: Identar promises ao invés de conectá-las
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})

Erro 2: Esquecer de retornar uma promise
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})

checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});
*/

//9. Using Promise.all()
/*
Quando feita da maneira certa, a composição Promise é uma ótima maneira de
lidar com situações onde operações assíncronas dependem uma das outras ou
executam de uma certa maneira. E se estivessemos lidando com múltiplas promises?
mas não ligassemos para a ordem?

exemplo, se quisessemos nossa casa limpa, não importa a ordem das tarefas
o que importa é o resultado, ou seja, a casa limpa. Aliás, se todas são
feitas assíncronamente, vão acontecer na mesma hora!

Para maximizar eficiência, devemos usar concurrency, múltiplas operações
assíncronas acontecendo juntas. Com promises, podemos fazer isso com a função
Promise.all()

Promise.all() aceita um array de Promises como argumento e retorna uma single 
promise. Essa single promise irá se resolver em uma das duas maneiras:

1. Se todas as promises se resolverem, retorna um array contendo os valores
resolvidos de cada promise

2. Se uma promise der erro, retorna o erro e qual a promise que deu erro

ex:
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
*/

