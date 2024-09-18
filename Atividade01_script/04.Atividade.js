const ler = require('readline-sync');

let num = parseInt(prompt("Digite um número:"));
let resultado;

if (num % 2 === 0) {
  resultado = num + 8;
} else {
  resultado = num + 10;
}

console.log(`O resultado é ${resultado}`);