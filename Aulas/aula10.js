
//Módulo 10, Codecademy
//1.Debugging OverView
/*O computador está tentando ler o seu código, contudo, se ele está quebrado, ele vai retornar exatamente a parte em que está quebrado
te lançando um erro, e o porquê, muita das vezes

ex: documentation/app.js:25 --> linha do erro
    ReferenceError: myVariable is not Defined --> qual o tipo do erro*/

/*


2. TIPOS DE ERROS: 

SyntaxError: Código que não consegue ser lido pela máquina. When this error is thrown, scan your code to make sure you properly 
opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.

ReferenceError: Quando você tenta usar uma variável que não existe

TypeError: Quando você tenta perfomar uma ação em alguma coisa, que não recebe tal ação, por exemplo, um method para string, em um
número.


3. Debugging  Errors: 

Um processo eficiente para trabalhar com os erros:

1. Rode seu código, veja o tipo do erro, descrição e localização
2. vá ao arquivo errôneo, em sua linha. Usando o tipo do erro e a descrição, identifique o erro 
3. concerte o código.


4. Locating Silent Bugs

Erros jogados pelo computador são muito úteis, eles dizem onde e o que é o erro, entretanto,
se o seu código roda sem erros, não significa que ele está livre de bugs
você pode muito bem conseguir rodar um código, que retorna valores inesperados, isso também é um bug

Para isso, uma ferramenta muito útil é o console.log()

adicionando prints ao nosso código, podemos identificar aonde aos coisas deram errado.
*/

function capitalizeASingleWord(word) {
    // console.log(word); // first log, used to check the parameter beeing passed.
    if (word.match(' ')) { //anteriormente, havia um ! antes
    //   console.log('Word value inside of if statement: ' + word); // second log, checking the if statement, the error is here
      return null;
    }
    
    let firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);
    
    firstLetter = firstLetter.toUpperCase();
    
    return firstLetter + restOfWord;
  }
  
  // Should return "Hey"
  console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 
  
  // Should return null
  console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));