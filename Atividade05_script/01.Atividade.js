const ler = require('readline-sync');

const atividade1 = () => {
    let produtos = [];

    while (true) {
        let nome = ler.question('Digite o nome do produto (ou "fim" para encerrar): ');
        if (nome.toLowerCase() === 'fim') break;

        let quantidade = parseInt(ler.question('Digite a quantidade do produto: '));

        produtos.push({ nome, quantidade });
    }

    produtos = produtos.filter(produto => produto.quantidade > 0);
    produtos.sort((a, b) => a.nome.localeCompare(b.nome));

    console.log("Lista de produtos organizada:");
    console.log(produtos);
}


