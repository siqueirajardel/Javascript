const ler = require('readline-sync');

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

let homemMaisVelho = Math.max(idadeHomem1, idadeHomem2);
let homemMaisNovo = Math.min(idadeHomem1, idadeHomem2);
let mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2);
let mulherMaisNova = Math.min(idadeMulher1, idadeMulher2);

let soma = homemMaisVelho + mulherMaisNova;
let produto = homemMaisNovo * mulherMaisVelha;

console.log(`A soma das idades do homem mais velho com a mulher mais nova é ${soma}`);
console.log(`O produto das idades do homem mais novo com a mulher mais velha é ${produto}`);