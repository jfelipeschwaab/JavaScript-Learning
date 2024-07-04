const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




console.log('(1)Positivo ou Negativo\n(2)ParOuimpar\n(3)Ano Bissexto\n(4)Maior entre 3 numeros\n(5)Calculadora de notas\n(6)Verificação de Triangulo\n(7)Calculadora de IMC\n(8)Conversão de Temperatura\n(9)Contagem Regressiva\n(10)Tabuada');

rl.question('Digite o número da questão que você deseja acessar:\n', (userInput) => {
    let userNumber = Number(userInput);

    switch(userNumber){
        case 1:
            rl.question('Digite um número para saber se ele é negativo, zero, ou positivo: ', (userInputCase) => {
                let num = Number(userInputCase);
                function PositiveOrNegative(num) {    //Checa se o número é Positivo ou negativo
                    if(num > 0){
                        console.log('Número positivo');
                    } else if(num === 0) {
                        console.log('O número é zero');
                    } else {
                        console.log('Número negativo');
                    }
                }
                PositiveOrNegative(num);
                rl.close();  // Fechar a interface após a execução
            });
            break;

        case 2:
            rl.question('Digite um numero para saber se ele é Impar ou Par: ', (userInputCase) => {   
                let num = Number(userInputCase);
                function EvenOrOdd(num) {   //Função Para checar se o número é Ímpar ou Par
                    if(num % 2 === 0) {
                        console.log('O número é par');
                    }else {
                        console.log('O número é ímpar');
                    }
                }
                EvenOrOdd(num);
                rl.close();
            });
            break;

        case 3:
            rl.question('Digite um ano para verificar se ele é bissexto ou não: ', (userInputCase) => {
                let ano = Number(userInputCase);
                function AnoBissexto(ano) {           //Função para verificar se o ano é bissexto
                    if(ano % 4 === 0){
                        console.log('O ano é bissexto');
                    } else if(ano % 400 == 0){
                        console.log('O ano é bissexto');
                    }else {
                        console.log('O ano não é bissexto');
                    }
                }
                AnoBissexto(ano);
                rl.close();
            });
            break;

        case 4: 

        rl.question('Digite o primeiro número: ', (num1) => {
            num1 = Number(num1);
            rl.question('Digite o segundo número: ', (num2) => {
                num2 = Number(num2);
                rl.question('Digite o terceiro número: ', (num3) => {
                    num3 = Number(num3);

                    function maxNumber(num1,num2,num3){
                        let maior = Math.max(num1,num2,num3);
                        return console.log(`O maior número é ${maior}`);
                    }
                    maxNumber(num1,num2,num3);
                    rl.close();
                });
            });
        });
            break;


        case 5:
            rl.question('Digite quantos alunos há na sala: ', (alunos) => {
                alunos = Number(alunos);
                
                function solicitarNota(contagem) {
                    return new Promise((resolve, reject) => {
                        rl.question(`Digite a nota do aluno ${contagem + 1}: `, (nota) => {
                            nota = Number(nota);
                            if (!isNaN(nota)) {
                                resolve(nota);
                            } else {
                                reject(new Error('Por favor, insira uma nota válida.'));
                            }
                        });
                    });
                }

                async function MediaDaSala(alunos) {
                    let contagem = 0;
                    let total = 0;
                    while (contagem < alunos) {
                        try {
                            let nota = await solicitarNota(contagem);
                            total += nota;
                            contagem++;
                        } catch (error) {
                            console.log(error.message);
                        }
                    }
                    let media = total / alunos;
                    console.log(`A média da sala é ${media}`);
                    rl.close();
                }

                MediaDaSala(alunos);
            });
            break;


        case 6:
            rl.question('Digite o primeiro lado do triangulo: ', (num1) => {
                num1 = Number(num1);
                rl.question('Digite o segundo lado do triangulo: ', (num2) => {
                    num2 = Number(num2);
                    rl.question('Digite o terceiro lado do triangulo: ', (num3) => {
                        num3 = Number(num3);
    
                        function ValidTriangle(num1,num2,num3){
                            if(num1 + num2 >= num3 && num1 + num3 >= num2 && num2 + num3 >= num1){
                                console.log('Triangulo válido');
                            }else{
                                console.log('Triângulo inválido');
                            }
                        }
                        ValidTriangle(num1,num2,num3);
                        rl.close();
                    });
                });
            });
            break;

        case 7:
            rl.question('Digite o seu peso para ser calculado seu IMC: ', (peso) => {
                peso = Number(peso);
                rl.question('Agora digite sua altura em Metros: ', (altura)=>{
                    altura = Number(altura);
                    function IMCCalculator(altura, peso){
                        let imc = peso/(altura*altura);
                        if(imc < 18.5){
                            console.log(`Você está abaixo do seu peso ideal, seu imc é ${imc}`);
                        }else if(imc >= 18.5 && imc < 25){
                            console.log(`Você está dentro da faixa ideal do seu peso, seu imc é ${imc}`);
                        }else if(imc >=25 && imc < 30){
                            console.log(`Você está com sobrepeso, seu imc é ${imc}`);
                        }else if(imc >=30 && imc < 35){
                            console.log(`Você está com Obesidade Grau I, seu imc é ${imc}`);
                        }else if(imc >=35 && imc < 40){
                            console.log(`Você está com Obesidade Grau II, seu imc é ${imc}`);
                        }else{
                            console.log(`Você está com Obesidade Grau III, seu imc é ${imc}`);
                        }
                
                    }

                    IMCCalculator(altura,peso);
                    rl.close();

                });
            });
            break;
        
        case 8:
            rl.question('Digite a temperatura em Celsius para converte-la em Fahrenheit ', (temp) => {
                temp = Number(temp);
                function CelsiusToFahrenheit(temp) {           
                    let F = (9/5) * temp + 32;
                    return console.log(`A temperatura oferecida em Fahrenheit é ${F}`);
                }
                CelsiusToFahrenheit(temp);
                rl.close();
            });
            break;
        
        case 9:
            rl.question('Digite um numero para ser feito a contagem regressiva a partir dele: ', (contagem) => {
                contagem = Number(contagem);
                function Timer(contagem) {
                    console.log(contagem);
                    if (contagem > 1) {
                        setTimeout(() => {
                            Timer(contagem - 1);
                        }, 1000); // Espera 1 segundo (1000 milissegundos)
                    } else {
                        console.log('Começar!');
                    }
                }
                Timer(contagem);
                rl.close();
            });
            break;
        case 10:
            rl.question('Digite um numero para ser exibido sua tabuada de 1 a 10: ', (tabuada) => {
                tabuada = Number(tabuada);
                function Tabuada(tabuada){
                    for (let i = 1; i <= 10; i++) {
                        res = tabuada * i;
                        console.log(`${tabuada} x ${i} = ${res}`);
                        res = 0;
                    }
                }

                Tabuada(tabuada);
                rl.close();
            })

        default:
            console.log("Numero inválido");
            break;    
    }
});
