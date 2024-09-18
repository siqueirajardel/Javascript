const votos = {
    candidatoA: [
        { nome: "João" },
        { nome: "Maria" }
    ],
    candidatoB: [
        { nome: "Pedro" },
        { nome: "Ana" },
        { nome: "José" }
    ]
};

const contagemDeVotos = () => {
    const resultados = {};

    for (const candidato in votos) {
        resultados[candidato] = votos[candidato].length;
    }

    let maiorVotos = -1;
    let vencedor = "";

    for (const candidato in resultados) {
        if (resultados[candidato] > maiorVotos) {
            maiorVotos = resultados[candidato];
            vencedor = candidato;
        }
    }

    console.log(`O vencedor é o candidato ${vencedor} com ${maiorVotos} votos.`);
};

contagemDeVotos();
