const ler = require('readline-sync');

let letra = prompt("Digite uma letra:").toLowerCase();

if (["a", "e", "i", "o", "u"].includes(letra)) {
  console.log("É uma vogal");
} else {
  console.log("É uma consoante");
}