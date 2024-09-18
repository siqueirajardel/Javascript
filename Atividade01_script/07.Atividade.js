const ler = require('readline-sync');

let precoEtiqueta = parseFloat(prompt("Digite o preço do produto:"));
let condicaoPagamento = parseInt(prompt("Digite a condição de pagamento (1-Dinheiro/Cheque, 2-Cartão, 3-Duas vezes, 4-Duas vezes com juros):"));
let valorFinal;

switch (condicaoPagamento) {
  case 1:
    valorFinal = precoEtiqueta * 0.90;
    break;
  case 2:
    valorFinal = precoEtiqueta * 0.85;
    break;
  case 3:
    valorFinal = precoEtiqueta;
    break;
  case 4:
    valorFinal = precoEtiqueta * 1.10;
    break;
  default:
    console.log("Condição de pagamento inválida.");
    valorFinal = null;
}

if (valorFinal !== null) {
  console.log(`O valor a ser pago é R$ ${valorFinal.toFixed(2)}`);
}