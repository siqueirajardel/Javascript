// Arrays - Vetores - Indice de valor

let nomes = ["Marta", "João", "Jonas", "Maria", "Geralda", "Alice"];

const ler = require('readline-sync');

let nome = ler.question("Digite um nome: ");

let x = nomes.indexOf(nome);

if (x >= 0) {
    console.log('O nome ${nome} está na posição ${x} no array nomes.');
} else {
    console.log('O nome ${nome} não está no array nomes.');
}