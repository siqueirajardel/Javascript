const ler = require('readline-sync');

function realizarCalculo(numero, opcao) {
    let resultado;

    switch (opcao) {
        case 101:
            resultado = Math.sqrt(numero);
            break;
        case 102:
            resultado = numero / 2;
            break;
        case 103:
            resultado = numero * 0.10;
            break;
        case 104:
            resultado = numero * 2;
            break;
        default:
            console.log("Opção inválida.");
            resultado = null;
    }

    if (resultado !== null) {
        console.log(`O resultado do cálculo é ${resultado}`);
    }
}

const numero = parseFloat(ler.question("Digite um número real: "));
const opcao = parseInt(ler.question("Escolha o tipo de cálculo:\n101 - Raiz quadrada\n102 - A metade\n103 - 10% do número\n104 - O dobro\n"), 10);

realizarCalculo(numero, opcao);
