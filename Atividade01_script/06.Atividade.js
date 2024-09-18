const ler = require('readline-sync');

let peso = parseFloat(prompt("Digite o peso (kg):"));
let altura = parseFloat(prompt("Digite a altura (m):"));
let imc = peso / (altura * altura);
let condicao;

if (imc < 18.5) {
  condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  condicao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
  condicao = "Acima do peso";
} else {
  condicao = "Obeso";
}

console.log(`O IMC é ${imc.toFixed(2)} e a condição é ${condicao}`);