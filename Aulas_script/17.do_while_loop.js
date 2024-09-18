// Estrutura de repetição DO WHILE

const ler = require('readline-sync');

let soma, num;

do {
    
    soma += num; // soma = soma + num
    num = ler.questionInt("Digite um número ou -1 para sair: ");

} while (num < 0);

console.log("A soma dos números digitados é: ", soma);

