//Módulo 6 Codecademy
//High Order Functions

//Function as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes 
  
  console.log(isTwoPlusTwo.name)

  //Podemos checar o nome de uma função, ou até mesmo atribuir uma função como o valor de uma variável



//Function as Parameters//CallBack Function
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {    //isso é chamado de CallBack, quando utilizamos uma função como parametro nas HighOrderFunctions
    let checkA = val + 2;
    let checkB = func(val);
    if(checkA === checkB){
      return func(val);
    }else{
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 3));
  
  