const ler = require('readline-sync');

let litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
let tipoCombustivel = prompt("Digite o tipo de combustível (A - álcool, G - gasolina):").toUpperCase();
let precoPorLitro, desconto, valorFinal;

if (tipoCombustivel === "A") {
  precoPorLitro = 4.70;
  if (litros <= 25) {
    desconto = 0.02;
  } else {
    desconto = 0.04;
  }
} else if (tipoCombustivel === "G") {
  precoPorLitro = 5.86;
  if (litros <= 25) {
    desconto = 0.03;
  } else {
    desconto = 0.05;
  }
} else {
  console.log("Tipo de combustível inválido.");
  desconto = 0;
}

valorFinal = litros * precoPorLitro * (1 - desconto);
console.log(`O valor a ser pago é R$ ${valorFinal.toFixed(2)}`);