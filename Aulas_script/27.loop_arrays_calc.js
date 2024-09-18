// Manipulando os dados do array utilizando loop for

let numeros = [12, 34, 51, 11, 78, 41, 23];

for (let i = 0 ; 1 < numeros.length; i++){
    console.log(`Valor ${i}: ${numeros[i]} +`);
    soma += numeros[i]; // soma = soma + numeros[i];

}

console.log(`Total: ${soma}`);