const readline = require('readline-sync');
const { carregarUsuarios, salvarUsuarios } = require('./usuarios');

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarJogo(nomeJogador) {
    const usuarios = carregarUsuarios();
    const jogador = usuarios.find((usuario) => usuario.nome === nomeJogador);

    if (!jogador) {
        console.log('Jogador não encontrado. Cadastre-se antes de jogar.');
        return;
    }

    const numeroAleatorio = gerarNumeroAleatorio(1, 50);
    console.log(`Olá, ${nomeJogador}! Tente adivinhar o número entre 1 e 50.`);

    let tentativas = 0;
    while (true) {
        const palpite = readline.questionInt('Digite seu palpite: ');

        if (palpite < 1 || palpite > 50) {
            console.log('Por favor, digite um número entre 1 e 50.');
        } else {
            tentativas++;

            if (palpite === numeroAleatorio) {
                console.log(`Parabéns, ${nomeJogador}! Você acertou o número em ${tentativas} tentativa(s).`);
                jogador.pontuacao++;
                salvarUsuarios(usuarios);
                break;
            } else if (palpite < numeroAleatorio) {
                console.log('Tente um número maior.');
            } else {
                console.log('Tente um número menor.');
            }
        }
    }
}

module.exports = {
    iniciarJogo,
};
