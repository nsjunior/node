
//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();
//faz alguma pergunta e pega o valor do usuario
var valor = prompt('Informe um valor a ser consultado no array: ');
var array = [];

console.log('Conteúdo do array antes de tudo: ', array)

for (let i = 0; i < 100; i++)
{
    array.push(i + 1);
}

console.log('Usuario informou o valor: ', valor)
console.log('Conteúdo do array depois do primeiro for: ', array)

let valorEncontrado = false;

for(let i = 0; i < array.length; i++)
{
    if(array[i] == valor)
    {
        console.log(valor,' Consta no array');
        valorEncontrado = true;
        break;
    }
}
if (!valorEncontrado)
{
    console.log('Não consta no array')
}
