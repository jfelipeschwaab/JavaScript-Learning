//MÓDULO 12 CODECADEMY
//JAVASCRIPT CLASSES
//1. Constructor
/*
Há um método importante que define os objetos/classes criadas, 
é chamado do method constructor. Javascript chama o
constructor toda vez que é criada uma nova instância
de uma classe


ex:

class Dog {
    constructor(name) {
        this.name = name
        this.behavior = 0;
    }
}

- Dog é o nome da classe
- Javascript vai invocar o constructor toda vez que uma 
instância for criada
- Esse constructor em específico aceita apenas um
parametro, 'name'.
- Dentro do constructor, utilizamos a palavra-chave
this, this refere-se à instância daquela classe

*/

class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
        
    }
}

//2. Instance
/*
Agora temos o conhecimento necessário para criar instâncias
de classes, uma instância é um objeto qe possui as propriedades
e os metodos de uma classe, porém, com valores únicos
*/

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

//3. Methods
/*
Agora temos conhecimento para criar um objeto com
nome, e seu constructor, agora precisamos adicionar
getters, setters e methods para trazer vida à nossa classe

Class methods e getters são o mesmo quando você faz para objetos
exceto que você não os separa por vírgulas.
*/

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    
    get name () {
        return this._name;
    }

    get department () {
        return this._department;
    }

    get remainingVacationDays () {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
}

//4. Method Calls
/*
Finalmente, vamos acessar nossos métodos para acessar
e manipular dados das nossas instâncias de classes.
*/

console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

//5. Inheritance I
/*
Quando múltiplas classes compartilham propriedades ou
methods, tornam-se candidatos para inheritance, uma
ferramenta para devs que diminui a qtd de código necessário

Com inheritance, você consegue criar uma classe pai
(também conhecida como superClass) com propriedades
e methods que múltiplos child classes utilizam.

Ao invés de criar uma classe dog ou cat, abstraimos tudo
e criamos a class Animal

ex:

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
*/

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }


//6. Inheritance II 
/*
Já abstraímos as propriedades compartilhadas e methods
das nossas classes Dog e Cat, em uma classe pai chamada animal

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
    
  incrementBehavior() {
    this._behavior++;
  }
}

Agora que temos essas propriedades compartilhadas e methods
na classe Pai, podemos extende-la para nossas subclasses

ex: 

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

Note que chamamos o super na nossa primeira linha no
constructor, e só aí setamos o usesLitter na segunda linha.
Em um constructor, você na maioria das vezes deve chamar o method
super antes de usar o this, se você não o fazer, JavaScript
irá te lançar um reference Error
*/

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;

    }
    get certifications() {
        return this._certifications;
      }
      addCertification(newCertification) {
        this._certifications.push(newCertification);
      }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications)



//7. Static Methods
/*
As vezes você vai querer que methods não fiquem liberados
para as instâncias de classe, apenas para a classe em si
um exemplo é a classe Date, e o method .now

Date.now()

você só consegue usar esse method com a classe em si
que é Date


*/

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
  }

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;

    }
    get certifications() {
        return this._certifications;
      }
      addCertification(newCertification) {
        this._certifications.push(newCertification);
      }
}
