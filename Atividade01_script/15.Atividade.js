const ler = require('readline-sync');

let valorFixado = parseFloat(prompt("Digite o valor fixado:"));
let valorVendas = parseFloat(prompt("Digite o valor das vendas:"));

if (valorVendas >= valorFixado) {
  console.log("Ganhou!");
} else {
  console.log("Não ganhou!");
}

