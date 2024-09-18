const ler = require('readline-sync');

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));

let nums = [num1, num2, num3];
nums.sort((a, b) => b - a);

console.log(`Os números em ordem decrescente são: ${nums.join(", ")}`);