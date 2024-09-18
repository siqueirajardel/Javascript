const jogadores = [
    { nome: "Alice", pontuacao: 100 },
    { nome: "Bob", pontuacao: 80 },
    { nome: "Carol", pontuacao: 120 },
    { nome: "David", pontuacao: 90 }
];

const ordenarRanking = () => {
    jogadores.sort((a, b) => b.pontuacao - a.pontuacao);

    console.log("Ranking de Jogadores:");
    for (let i = 0; i < jogadores.length; i++) {
        console.log(`${i + 1}. ${jogadores[i].nome} - ${jogadores[i].pontuacao} pontos`);
    }
};

ordenarRanking();
