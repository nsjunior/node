/**
 * Ex2: criar uma calculadora que funcione seguindo o seguinte processo:
- Perguntar para o usuário um número
- Perguntar para o usuário uma operação ( +, -, * ou / )
- Perguntar para o usuário outro número
- Fazer a conta e exibir na tela
- Fazer as 4 operações acima até que o usuário digite "sair"

--------------------

 * ex2:
    - tem algumas coisas estranhas no código que não fazem nada:
    - "var result = valor1, operacao, valor2"
    - "valor1 = +valor1"
    - "valor2 = +valor2"
    - o código só deveria mostrar a opção de sair após executar pelo menos uma vez.
    - o código deveria ficar em loop até o usuário pedir para sair.
 * 
 */

do {
//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

var valor1 = prompt('Informe um valor: ');

if (valor1 == '') {
    console.log('O primeiro valor é necessário para seguir com o programa.')
    process.exit(1);
}

var operacao = prompt('Escolha uma operação atitimética: + - / *: ');

if (operacao == '') {
    console.log('O operador é necessário para seguir com o programa.')
    process.exit(1);
}

var valor2 = prompt('Informe outro valor: ');

if (valor2 == '') {
    console.log('O segundo valor é necessário para seguir com o programa.')
    process.exit(1);
}

var result = valor1, operacao, valor2

switch (operacao) {
    case "+":
        var result_soma = parseInt(valor1) + parseInt(valor2);
        console.log(valor1, operacao, valor2, '=', result_soma);
        var sair = prompt('Digite sair para encerrar... ou ENTER para continuar.');
        break;

    case "-":
        var result_sub = parseInt(valor1) - parseInt(valor2);
        console.log(valor1, operacao, valor2, '=', result_sub);
        var sair = prompt('Digite sair para encerrar... ou ENTER para continuar.');
        break;
    case "*":
        var result_mult = parseInt(valor1) * parseInt(valor2);
        console.log(valor1, operacao, valor2, '=', result_mult);
        var sair = prompt('Digite sair para encerrar... ou ENTER para continuar.');
        break;
    case "/":
        var result_div = parseInt(valor1) / parseInt(valor2);
        console.log(valor1, operacao, valor2, '=', result_div);
        var sair = prompt('Digite sair para encerrar... ou ENTER para continuar.');
        break;

    default:
        console.log('Operação escolhida não é válida.')

}

} while (sair == '');
console.log('programa encerrado')
process.exit(1);