// Entrada IF ELSE - Estrutura Condicional

const ler = require('readline-sync');

let nome = ler.question("Informe o nome do Aluno: ");
let nota1 = ler.questionFloat("Informe nota 1: ");
let nota2 = ler.questionFloat("Informe nota 2: ");
let nota3 = ler.questionFloat("Informe nota 3: ");

let media = (nota1 + nota2 + nota3)/3;

media = media.toFixed(2);

console.log(media);

if (media >= 60) {
    console.log("O Aluno " + nome + " Foi Aprovado com a nota " + media);

    } else if (media >= 30 && media <= 59){
        console.log("O Aluno ", + nome, "está de recuperação com a nota ", + media ) 
    
    } else {
        console.log(`O aluno ${nome} foi reprovado com a nota ${media}`)


}


