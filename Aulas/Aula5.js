//Módulo 5 Codecademy
//Blocks and scopes

const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());               
/*Esse modulo explica como os Escopos funcionam, e como não consigo retornar uma varivel que está dentro de um escopo fechado
Mas consigo acessar sempre uma variavel que esteja definida globalmente.

Scope = Qual o escopo da sua varíavel, em quais pedaços ela pode ser acessada

Blocks = Statements que estão dentro de chaves = { }

Global Scope = Um escopo que pode ser referenciado em todo o código a qualquer hora

Global variables = Variáveis que podem ser utilizadas em quaisquer escopos

Block Scope = Um escopo fechado dentro de chaves {}

Local variables = variavéis que podem ser apenas acessadas internamente, dentro das chaves onde foram declaradas {}

*/

