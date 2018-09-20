/**
 * Ex1: criar um array com 9 posições com os números em sequência de 0 até 9, mas com um número da sequência faltando (ex: [0,1,2,3,4,6,7,8,9]).
 * Identificar o número que está faltando no array (só printar). Usando o exemplo acima, o programa printaria o 5.
 */

var arrfixo = [0, 1, 2, 3, 4, 6, 7, 8, 9];
var arrayvazio = [];

for (var i = 0; i <= arrfixo.length; i++)
{
    arrayvazio.push(i);

    if (arrayvazio[i] != arrfixo[i])
    {
        console.log(arrayvazio[i]);
        
        break;
    }

}