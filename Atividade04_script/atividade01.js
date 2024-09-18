const ler = require('readline-sync');

let numeros = [];

console.log("Digite cinco números: ");

for (let i = 0; i < 5; x++) {
    let numero = ler.questionInt(`Numero ${i + 1} `);
    numeros.push(numero);
}
   let maiorNumero = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    

}
