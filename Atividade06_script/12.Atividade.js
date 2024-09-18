const atividadesAmbientais = {
    transporte: [
        { descricao: "Caminhão", carbono: 10 },
        { descricao: "Carro", carbono: 5 }
    ],
    residencia: [
        { descricao: "Energia", carbono: 15 },
        { descricao: "Água", carbono: 8 }
    ]
};

const calcularImpactoTotal = () => {
    let impactoTotal = 0;

    for (const categoria in atividadesAmbientais) {
        for (const atividade of atividadesAmbientais[categoria]) {
            impactoTotal += atividade.carbono;
        }
    }

    console.log(`Impacto ambiental total: ${impactoTotal} unidades de carbono.`);
};

// Exemplo de uso:
calcularImpactoTotal();
