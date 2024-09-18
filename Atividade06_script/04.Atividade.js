const matrizFilmes = [
    [5, 3, 4],
    [1, 5, 1],
    [2, 3, 5]
];

const sugerirFilmes = () => {
    for (let i = 0; i < matrizFilmes.length; i++) {
        let maxRating = -1;
        let indiceFilme = -1;

        for (let j = 0; j < matrizFilmes[i].length; j++) {
            if (matrizFilmes[i][j] > maxRating) {
                maxRating = matrizFilmes[i][j];
                indiceFilme = j;
            }
        }

        console.log(`Usuário ${i + 1}: Sugerir filme da categoria ${indiceFilme + 1}`);
    }
};
sugerirFilmes();
