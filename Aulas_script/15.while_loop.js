// Estrutura de Repetição - While

const ler = require('readline-sync')

let num = ler.questionInt("Informe um número: ");

while (num > 0) {
    console.log(num);
    num--; // num = num - 1
}