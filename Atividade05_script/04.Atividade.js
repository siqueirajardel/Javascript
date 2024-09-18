const ler = require('readline-sync');

const atividade4 = () => {
    let participantes = [];

    while (true) {
        let nome = ler.question('Digite o nome do participante (ou "fim" para encerrar): ');
        if (nome.toLowerCase() === 'fim') break;

        if (participantes.indexOf(nome) === -1) {
            participantes.push(nome);
            console.log(`Participante ${nome} registrado.`);
        } else {
            console.log(`Participante ${nome} já está registrado.`);
        }
    }

    console.log("Lista de participantes não registrados:");
    console.log(participantes);
}

