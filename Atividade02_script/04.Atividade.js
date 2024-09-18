const ler = require('readline-sync');

let valorVenda = parseFloat(prompt("Digite o valor da venda:"));
let opcaoPagamento = parseInt(prompt("Escolha a condição de pagamento:\n1 - Venda a Vista (10% de desconto)\n2 - Venda a Prazo 30 dias (5% de desconto)\n3 - Venda a Prazo 60 dias (mesmo preço)\n4 - Venda a Prazo 90 dias (5% de acréscimo)\n5 - Venda com cartão de débito (8% de desconto)"));

let desconto = 0;
let acrescimo = 0;

switch (opcaoPagamento) {
  case 1:
    desconto = 0.10;
    break;
  case 2:
    desconto = 0.05;
    break;
  case 3:
    desconto = 0;
    break;
  case 4:
    acrescimo = 0.05;
    break;
  case 5:
    desconto = 0.08;
    break;
  default:
    console.log("Opção inválida.");
    desconto = 0;
    acrescimo = 0;
}

let valorFinal = valorVenda * (1 - desconto) * (1 + acrescimo);
console.log(`O valor total da venda final é R$ ${valorFinal.toFixed(2)}`);