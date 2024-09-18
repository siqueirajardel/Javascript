const ler = require('readline-sync');

let nome = prompt("Digite o nome do funcionário:");
let quantidadeVendida = parseInt(prompt("Digite a quantidade de produtos vendidos:"));
let comissao;

if (quantidadeVendida <= 200) {
  comissao = quantidadeVendida * 5.00;
} else if (quantidadeVendida <= 450) {
  comissao = quantidadeVendida * 7.50;
} else {
  comissao = quantidadeVendida * 10.00;
}

console.log(`O funcionário ${nome} receberá R$ ${comissao.toFixed(2)} de comissão.`);