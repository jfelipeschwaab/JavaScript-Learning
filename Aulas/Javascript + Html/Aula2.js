//1. DOM
/* 
Document Object Model

o Dom é: logical tree-like Model that organizes a web page's
HTML Document as an Object



*/

//2. Tweak an Element
/* 
Quando voce utiliza o DOM no seu script para acessar o html
voce pode acessar os elementos e todas suas propriedades

Isso te permite adicionar, modificar, e atribuir propriedades html
*/

document.body.innerHTML = '<h1>This is now the heading of the body element</h1>'

//3. Select and Modify Elements
/*
O que fazer caso queiramos acessar elementos específicos e não só o body?
a interface DOM nos permite acessar conteúdo específico por meio de seletores CSS

o .querySelector() nos permite especificar um CSS Selector 
como uma string, e retorna o primeiro elemento que 'bate' com
o selector

Se voce quisesse acessar um elemento diretamente pelo seu ID
voce pode usar um method chamado .getElementById()
ex: document.getElementById('bio').innerHTML = 'The description';

Também há o .getElementByClassName() e .getElementsByTagName()
que retorna um array de elementos, ao invés de apenas um, voce pode utilizar
bracket notation para acessar elementos individuais

*/
document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters'

document.getElementById('fourth').innerHTML = 'Professor Snape'

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'

document.getElementsByTagName('li')[0].innerHTML = 'Dobby'

//4.Style an Element
/*
Outra maneira de modificar um elemento é mudando seu CSS

o .style do DOM the permite acessar o inline style da sua tag HTML
a sintaxe é a seguinte

element.style.property

ex:
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

ou

document.querySelector('.blue').style.fontFamily = 'Roboto';


**O JS não utiliza o hiphen, como o css (background-color)
ao inves disso, utiliza-se o CamelCaseNotation


*/

//5. Traversing the DOM
/*
Cada elemento tem um .parentNode e uma propriedade .children.
O .parentNode retorna o parente do elemento especificado.
note que document é o root node, logo, .parentNode vai retornar nulo, e .children
retorna um array de elementos, caso não tenha nenhum, é retornado nulo também.

*/
let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';


//6.Create and Insert Elements
/*
Assim como o DOM nos permite modificar elementos existentes
ele também nos permite a criação de novos elementos.

o method .createElement() cria um novo elemento baseado na
tag especificada e passada como um argumento, entretanto,
ele não ''append'' ao document, ele cria um elemento vazio 
com nenhum inner HTML

ex: 
let paragraph = document.createElement('p');
paragraph.id = 'info';
paragraph.innerHTML = 'The text inside the paragraph';

para criar um elemento e adiciona-lo na web page, voce deve 
inclui-lo como um 'child' de um elemento que ja existe no DOM, para
ser o parent element. chamamos esse processo de appending.

o method .appendChild(element) vai adicionar o elemento como o ultimo
child node do parentNode que o elemento está sendo inserido.
*/

let newAttraction = document.createElement('li');

newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';

document.getElementById('italy-attractions').appendChild(newAttraction);


//7. Remove an Element
/*
DOM também nos permite remover um elemento, com o method .removeChild();

ex: 
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);

se voce preferir esconder um elemento do que excluí-lo, há 
a propriedade .hidden() que te permite esconder, setando como true
ou false

ex: 
document.getElementById('sign').hidden = true;

o código acima não removeu o elemento com id 'sign', apenas 
escondeu-o

*/

let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);


//8. Add Click Interactivity
/*
Você pode adicionar interação com o DOM, ao atribuir uma 
função baseada em um evento. Eventos podem incluir tudo, desde
clicar em um botão até passar o mouse por um elemento.

ex: 
let element = document.querySelector('button');


element.onclick = function () {
    element.style.backgroundColor = 'blue';
}

Voce também pode assinalar o evento de .onclick à uma função nomeada.

ex: 
let element = document.querySelector('button');

function turnBlue() {
    element.style.backgroundColor = 'blue';
}

element.onclick = turnBlue;
*/