const ler = require('readline-sync');

const matrizAssentos = [
    ["O", "O", "X"],
    ["O", "X", "O"],
    ["O", "O", "X"]
];

const imprimirMapaAssentos = () => {
    console.log("Mapa de Assentos:");
    console.table(matrizAssentos);
};

const reservarAssento = () => {
    imprimirMapaAssentos();

    const linha = ler.questionInt('Digite o número da linha do assento que deseja reservar: ') - 1;
    const coluna = ler.questionInt('Digite o número da coluna do assento que deseja reservar: ') - 1;

    if (linha >= 0 && linha < matrizAssentos.length && coluna >= 0 && coluna < matrizAssentos[0].length) {
        if (matrizAssentos[linha][coluna] === "O") {
            console.log("Este assento já está ocupado. Escolha outro.");
        } else {
            matrizAssentos[linha][coluna] = "O";
            console.log("Assento reservado com sucesso!");
            imprimirMapaAssentos();
        }
    } else {
        console.log("Assento selecionado está fora dos limites. Tente novamente.");
    }
};


reservarAssento();
