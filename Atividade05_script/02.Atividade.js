const ler = require('readline-sync');

const atividade2 = () => {
    let chamadas = [];
    let chamadasPrioritarias = [];

    while (true) {
        let tipo = ler.question('Digite o tipo de chamada (ou "fim" para encerrar): ');
        if (tipo.toLowerCase() === 'fim') break;

        let mensagem = ler.question('Digite a mensagem da chamada: ');

        chamadas.push({ tipo, mensagem });
    }

    chamadasPrioritarias = chamadas.filter(chamada => chamada.tipo.toLowerCase() === 'incêndio');
    chamadas = chamadas.filter(chamada => chamada.tipo.toLowerCase() !== 'incêndio');

    console.log("Chamadas prioritárias:");
    console.log(chamadasPrioritarias);
    console.log("Chamadas restantes:");
    console.log(chamadas);
}

