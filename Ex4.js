//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//faz alguma pergunta e pega o valor do usuario
var valore1 = prompt('Qual o valor da PRIMEIRA posição do array? ');
var valore2 = prompt('Qual o valor da SEGUNDA posição do array? ');
var valore3 = prompt('Qual o valor da TERCEIRA posição do array? ');

var valores = [valore1,valore2,valore3];

//console.log(valores[0],valores[1],valores[2])

if (valores[0] == valores[1] && valores[1] == valores[2]){
    console.log('Os tres valores sao iguais');
} else if (valores[0] == valores[2] || valores[0] == valores[1]){
    console.log('dois valores iguais');
} else if (valores[1] == valores[2] || valores[0] == valores[1]){
    console.log('dois valores iguais');
} else {
    console.log('nenhum valor igual no array.');
}
