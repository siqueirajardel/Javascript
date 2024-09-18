const ler = require('readline-sync');

let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
let estadoCivil = prompt("Digite o estado civil:").toUpperCase();

if (sexo === "F" && estadoCivil === "CASADA") {
  let tempoCasada = parseInt(prompt("Há quantos anos está casada?"));
  console.log(`${nome} está casada há ${tempoCasada} anos.`);
} else {
  console.log("Não é necessário informar o tempo de casada.");
}