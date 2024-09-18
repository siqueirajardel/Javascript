// Arrays Manipulação de Dados

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23, 1];

console.log("---- Exibindo os itens iniciais dos arrays ----" );
console.log(animais);
console.log(numeros);


// Adicionar um valor no final do array
animais.push("Coelho");
numeros.push(88);
console.log("--- Exibindo com novos dados nos arrays -----");

// Excluir um valor no inicio do array
animais.pop();
numeros.pop();
console.log("--- Exibindo com novos dados no inicio dos array -----");
console.log(animais);
console.log(numeros);

// Adicionar um valor no inicio do array
animais.unshift("Jacaré");
numeros.unshift(99);
console.log("--- Exibindo com novos dados no inicio do array -----");
console.log(animais);
console.log(numeros);

// Organizar os dados do array em ordem alfabetica 
animais.sort();
numeros.sort();
console.log("--- Exibindo os arrays em ordem alfabetica -----");
console.log(animais);
console.log(numeros);

// Organizar os dados do array em ordem contraria
animais.reverse();
numeros.reverse();
console.log("--- Exibindo os arrays com dados invertidos -----");
console.log(animais);
console.log(numeros);
