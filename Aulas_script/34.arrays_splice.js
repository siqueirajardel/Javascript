// Excluir e Adicionar dados no Arrays - SPLICE

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let animais_removidos = animais.splice(1, 2);

console.log(animais_removidos);
console.log(animais);

console.log("-------------------------------------------------");

animais.splice(1, 2, "Urso", "Jacaré", "Esquilo");
console.log(animais);

