//Módulo 4 Codecademy
//FUNCTIONS DECLARATIONS
function getReminder(){
    console.log('Water the plants.');
  }
  
  function greetInSpanish(){
    console.log('Buenas tardes.');
  }

//CALLING A FUNCTION
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business');
  }
  sayThanks();
  sayThanks();
  sayThanks();

//PARAMETERS AND ARGUMENTS
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole')

//DEFAULT PARAMETERS

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3='eggs'){ //Se nenhum parametro é passado, os valores padrões serão usados
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList();

//RETURN

function monitorCount(rows,columns){ //Função de Retornar algo
    return rows * columns;
  }

  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors);

//HELPER FUNCTIONS
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns){
    return monitorCount(rows,columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);

//FUNCTION EXPRESSION
const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true;
    }else{
      return false;
    }
  };
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));

//ARROWS FUNCTIONS
const plantNeedsWaterCase2 = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
 };   

//CONCISE ARROWS FUNCTIONS
  
const plantNeedsWaterCase3 = day => day === 'Wednesday' ? true : false;
  