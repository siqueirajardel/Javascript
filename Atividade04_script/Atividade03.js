const ler = require('readline-sync');

let numeros = [];
let soma = 0;

console.log("Digite cinco números: ");

for (let i = 0; i < 5; i++) {
    let numero = ler.questionInt(`Numero ${i + 1}`)
    numeros.push(numeros);
    soma += numeros[i];
}


console.log(`Total: ${soma}`);