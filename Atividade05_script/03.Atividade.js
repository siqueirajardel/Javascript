const ler = require('readline-sync');

const atividade3 = () => {
    let livros = [];

    while (true) {
        let titulo = ler.question('Digite o título do livro (ou "fim" para encerrar): ');
        if (titulo.toLowerCase() === 'fim') break;

        let categoria = ler.question('Digite a categoria do livro: ');

        livros.push({ titulo, categoria });
    }

    let contagemCategorias = {};
    livros.forEach(livro => {
        if (contagemCategorias[livro.categoria]) {
            contagemCategorias[livro.categoria]++;
        } else {
            contagemCategorias[livro.categoria] = 1;
        }
    });

    console.log("Contagem de livros por categoria:");
    console.log(contagemCategorias);
}

