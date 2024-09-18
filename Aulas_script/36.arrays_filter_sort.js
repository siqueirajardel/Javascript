// Ordenar Arrays - objetos e matriz - Ordem Alfabetica / Crscente e Decrescente

let nomes = ["Marta", "Joao", "Jonas", "Maria", "Geralda", "Alice"];

let numeros = [12, 34, 51, 11, 78, 41, 23];

let usuarios = [
    
    {nome: "Marta Rocha", idade: 46, email: "marta@gmail.com"},
    {nome: "Marcos Sena", idade: 24, email: "marcos@outlook.com"},
    {nome: "Luiza Silva", idade: 19, email: "lulu2015@gmail.com"},
    {nome: "Jonas Maia", idade: 21, email: "jonas@gmail.com"},
];

// let ordem_alfa = nomes.sor (parameter) a: string
let ordem_alfa = nomes.sort((a, b) => a - b);
console.log(ordem_alfa);

//let ordem_cres = numeros.sort();
let ordem_cres = numetos.sort((x, y) => x - y);
console.log(ordem_cres);

// let ordem_desc = numeros.reverse();
let ordem_desc = numeros.reverse((x, y) => y - x);
console.log(ordem_desc);

let users_alfa = usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.table(users_alfa);

let users_idade_cres = usuarios.sort((x, y) => x.idade - y.idade);
console.table(users_idade);

let x = [];

x.push((nome));
