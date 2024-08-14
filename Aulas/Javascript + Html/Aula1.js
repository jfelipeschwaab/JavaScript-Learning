//1. The script tag
/*The <script> element allows you to add JavaScript code inside an HTML file. Below, the <script> element
embeds valid JavaScript code:

<script>
  function Hello() {
    alert ('Hello World');
  }
</script>
*/


//2.The src attribute
//Para mirar o arquivo js no html, basta usar o src no script
//<script src="meuArquivo.js"></script>
//Dentro da tag Head no html


//3.How are scripts loaded?
/* O compilador do html não processa o arquivo html até
carregar todos os arquivos <script>, resultando em um delay

*Os scripts rodam em sequência, então se um depende do outro
devem ser ordenados corretamente.*


//4. Defer attribute
/* 
Uma vez os arquivos carregados, o compilador procede para 
compilar o proximo elemento no arquivo, isso pode resultar 
em um carregamento lento no website

HTML4 introduziu defer e async attributes do <script>

defer == scripts carregados após o carregamento completo do html


*/


//5. Async attribute
/*
Roda o arquivo script assíncronamente com o resto ta página
o script não esperará até o conteúdo inteiro ser carregado, irá
ser executado imediatamente após a página ser carregada.




*/