const ler = require('readline-sync');

let time1 = prompt("Digite o nome do primeiro time:");
let golsTime1 = parseInt(prompt("Digite o número de gols do primeiro time:"));
let time2 = prompt("Digite o nome do segundo time:");
let golsTime2 = parseInt(prompt("Digite o número de gols do segundo time:"));

if (golsTime1 > golsTime2) {
  console.log(`O vencedor é ${time1}`);
} else if (golsTime1 < golsTime2) {
  console.log(`O vencedor é ${time2}`);
} else {
  console.log("EMPATE");
}