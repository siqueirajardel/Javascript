const ler = require('readline-sync');

let mes = parseInt(prompt("Digite um número entre 1 e 12 correspondente ao mês:"));
let estacao;

switch (mes) {
  case 1:
  case 2:
  case 3:
    estacao = "Verão";
    break;
  case 4:
  case 5:
  case 6:
    estacao = "Outono";
    break;
  case 7:
  case 8:
  case 9:
    estacao = "Inverno";
    break;
  case 10:
  case 11:
  case 12:
    estacao = "Primavera";
    break;
  default:
    console.log("Número de mês inválido.");
    estacao = null;
}

if (estacao !== null) {
  let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  console.log(`A estação do ano correspondente ao mês de ${meses[mes - 1]} é ${estacao}`);
}