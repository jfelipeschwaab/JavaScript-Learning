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
  
  console.log(robot.provideInfo());
  
  
