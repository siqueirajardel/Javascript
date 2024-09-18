const ler = require('readline-sync');

let num = parseInt(prompt("Digite um número:"));
let divisivel = false;

if (num % 10 === 0) {
  console.log("É divisível por 10");
  divisivel = true;
}
if (num % 5 === 0) {
  console.log("É divisível por 5");
  divisivel = true;
}
if (num % 2 === 0) {
  console.log("É divisível por 2");
  divisivel = true;
}

if (!divisivel) {
  console.log("Não é divisível por 10, 5 ou 2");
}
