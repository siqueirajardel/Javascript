const doacoes = [
    { nomeDoador: "João", valor: 100 },
    { nomeDoador: "Maria", valor: 50 },
    { nomeDoador: "Pedro", valor: 200 }
];

const instituicoes = ["Instituição A", "Instituição B", "Instituição C"];
const distribuirDoacoes = () => {
    const valorPorInstituicao = Array(instituicoes.length).fill(0);

    for (let i = 0; i < doacoes.length; i++) {
        const indiceInstituicao = i % instituicoes.length;
        valorPorInstituicao[indiceInstituicao] += doacoes[i].valor;
    }

    console.log("Detalhes da distribuição de doações:");
    for (let i = 0; i < instituicoes.length; i++) {
        console.log(`${instituicoes[i]} recebeu R$ ${valorPorInstituicao[i]}`);
    }
};

distribuirDoacoes();
