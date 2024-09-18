const readline = require('readline-sync');
const fs = require('fs');

const arquivoUsuarios = 'usuarios.json';

function carregarUsuarios() {
    try {
        const data = fs.readFileSync(arquivoUsuarios);
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function salvarUsuarios(usuarios) {
    const data = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(arquivoUsuarios, data);
}

function cadastrar() {
    const usuarios = carregarUsuarios();

    const nome = readline.question('Digite o nome do jogador: ');
    const idade = readline.questionInt('Digite a idade do jogador: ');
    const email = readline.questionEMail('Digite o e-mail do jogador: ');

    const jogadorExistente = usuarios.find((usuario) => usuario.nome === nome);

    if (jogadorExistente) {
        console.log('Este jogador já está cadastrado.');
    } else {
        usuarios.push({ nome, idade, email, pontuacao: 0 });
        salvarUsuarios(usuarios);
        console.log('Jogador cadastrado com sucesso!');
    }
}

function exibirRanking() {
    const usuarios = carregarUsuarios();

    if (usuarios.length === 0) {
        console.log('Ainda não há jogadores cadastrados.');
    } else {
        usuarios.sort((a, b) => b.pontuacao - a.pontuacao);
        console.log('--- RANKING DE PONTUAÇÕES ---');
        usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. ${usuario.nome}: ${usuario.pontuacao} ponto(s)`);
        });
    }
}

module.exports = {
    cadastrar,
    exibirRanking,
};
