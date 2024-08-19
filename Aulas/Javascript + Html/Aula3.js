//1. Event Hadnler Registration
/* 
Usando o method addEventListener(), conseguimos que
um elemento específico do DOM 'escute' um evento
específico e faça sua ação conforme determinada.

O elemento DOM que 'escuta' o evento é chamado de
event target, e o pedaço de código que foi criado
é chamado de event handler (Manipulador do evento).

ex:

let eventTarget = document.getElementById('targetElement);

eventTarget.addEventListener('click', function () {
    //codigo
})

ao inves de criar uma função anônima, é uma boa prática
criar um evento nomeado. Seu código permanecerá organizado
e reutilizável.
*/

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
const showInfo = () => {
  moreInfo.style.display = 'block';
};

readMore.addEventListener('click', showInfo);

//2. Adding Event Handlers
/*
Olhamos como registrar event handlers usando 
o método .addEventListener(), mas há outra maneira

Event handlers também podem ser registrados settando
um .onEvent property em um elemento DOM(event target)

para isso, devemos colocar o nome do elemento + .on + o evento
ex: 
eventTarget.onclick = eventHandlerFunction;
*/
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

let textChange = () => {
  view.textContent = 'Hello, World!';
}

let textReturn = () => {
  view.textContent = 'View';
}


view.addEventListener('click', open);
close.addEventListener('click', hide);

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn)

//3. Removing Event Handlers
/*
O method .removeEventListener() é usado para reverter
o .addEventListener(). Esse método faz com que o target
do evento pare de 'escutar' um chamador do evento

ex: 
eventTarget.removeEventListener('click', eventHandlerFunction);

//USADO PARA QUANDO ALGO TEM QUE SER FEITO APENAS UMA VEZ
*/

let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
  ]
  
  let button = document.getElementById('fortuneButton');
  let fortune = document.getElementById('fortune');
  
  function fortuneSelector(){
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomFortune];
  }
  
  function showFortune(){
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
  
    //add your code here
  button.removeEventListener('click', showFortune );
  }
  
  button.addEventListener('click', showFortune);


//4. Event Object Properties
/*
Javascript armazena eventos como Events Objects com
seus dados relacionados e funcionalidades como
propriedades e métodos

Quando um evento é triggered, o event object pode 
ser passado como argumento para uma função handler de evento

ex: 
function eventHandlerFunction(event) {
  console.log(event.timeStamp);
}

eventTarget.addEventListener('click', eventHandlerFunction);

No exemplo acima, quando um evento 'click' é disparado
o eventHandlerFunction recebe o evento, o Event Object,
que contém informações relacionadas ao event 'click'

Logo, dá um log no horário que o evento foi disparado
em relação ao seu carregamento, utilizando a propriedade
.timeStamp

Há propriedades pré-determinadas associadas com objetos de eventos

.target --> referencia a qual elemento o evento está registrado
.type --> para saber o nome do evento
.timeStamp --> acessar os ms que passaram desde que o evento foi disparado.


*/

let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timeStamp;
}

share.addEventListener('click', sharePhoto);


//5. Event Types
/*
Além do evento click, há diversos tipos de DOM Events
que o browser pode disparar
*/
// This variable stores the "Pick a Color" button
let buttonColor = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')'
  event.target.style.backgroundColor = randomColor;
}

mysteryButton.addEventListener('wheel', colorChange);


buttonColor.addEventListener('click', colorChange);


//6. Mouse Events
/*
Há diversos eventos do mouse para se explorar
já que é o principal meio que o usuário tem 
para interagir com o site

mousedown
mouseover
mouseup
*/

// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width = '500px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function changeBackground(){
  itemTwo.style.backgroundColor = 'green';
}

itemTwo.addEventListener('mouseup', changeBackground);

function changeText(){
  itemThree.innerHTML = 'The mouse has left the element';
}

itemThree.addEventListener('mouseout', changeText);

function showItem(){
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);


//7. Keyboard Events
/*
Também há eventos para o teclado

keydown
keyup
*/
let ball = document.getElementById('float-circle');

// Write your code below
function up(){
  ball.style.bottom = '250px';
}

function down(){
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);