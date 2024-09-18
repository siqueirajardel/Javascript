const ler = require('readline-sync');

let salarioBruto = parseFloat("Digite o salário bruto:");
let valorPrestacao = parseFloat("Digite o valor da prestação:");

if (valorPrestacao <= 0.25 * salarioBruto) {
  console.log("Empréstimo pode ser concedido.");
} else {
  console.log("Empréstimo não pode ser concedido.");
}