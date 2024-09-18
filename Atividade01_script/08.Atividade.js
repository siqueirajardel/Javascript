const ler = require('readline-sync');

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let soma = num1 + num2;

if (soma > 20) {
  soma += 8;
} else {
  soma -= 5;
}

console.log(`O resultado é ${soma}`);