const ler = require('readline-sync');

let num = parseInt(prompt("Digite um número:"));

if (num % 3 === 0) {
  console.log("É múltiplo de 3");
} else {
  console.log("Não é múltiplo de 3");
}