const ler = require('readline-sync');

let nome = ler.question("Informe o nome do Aluno: ");
let val1 = ler.questionFloat("Informe um valor: ");
let val2 = ler.questionFloat("Informe um segundo valor: ");
let val3 = ler.questionFloat("Informe um terceiro valor: ");

let soma = (val1 + val2);

console.log(soma);

if (soma <= val3) {
    
    console.log("O valor " + soma + "é menor que " + val3);

}