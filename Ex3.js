/**
 * 
 * Ex3: Fazer um programa que peça para o usuário digitar uma lista de palavras, o programa deverá coletar essas palavras desta forma:
Primeira parte:
- Perguntar para o usuário uma palavra
- Salvar a palavra em um array
- Quando o usuário digitar "sair" o programa deverá exibir o número de palavras na lista que o usuário inseriu desde o começo.
Segunda parte:
- Perguntar para o usuário uma palavra a ser buscada
- Exibir quantas vezes essa palavra se repete na lista de palavras

------------------
ex3:
- tem algumas coisas estranhas no código que não fazem nada:
    - "do { (valor != 'sair')"?
    - if vazio dentro do for
- o código só deveria mostrar a opção de sair após executar pelo menos uma vez.
- o código deveria ficar em loop até o usuário pedir para sair.
- esse "do..while" tá funcionando como um loop infinito (só sai no break)
    - "while (array[array.length] = valor)" -> ele pega o último valor do array e atribui o valor,
    como o valor não é nulo, ele avalia a expressão do while como "true".
    - o while não deve ser usado assim porque não está avaliando uma expressão booleana.
- o trecho da contagem de palavras podia ser feito somente com uma váriável numérica comum,
porque só tem uma palavra sendo buscada. Esse trecho também poderia ficar fora do loop principal,
porque ele só é executado quando o usuário terminar de inserir as palavras.

 */

//importa a lib que pega o input do usuario

var arr = [];
do {
    var prompt = require('prompt-sync')();

    var valor1 = prompt('Informe uma palavra: ');
    
    arr.push(valor1);
    //console.log(arr);
    
}
while (valor1 != 'sair');


console.log('Anter de Encerrar...')

var valor2 = prompt('Informe uma palavra a ser buscada no array: ');

let cont = 0;

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == valor2)
    {
        cont++;
        valorEncontrado = true;
        //break;
    }
}

if (cont == 0)
{
    console.log('Não consta no array')
}
else
{
    console.log('A palavra ', valor2,' Consta no array', cont, 'vez(es).' );

}
