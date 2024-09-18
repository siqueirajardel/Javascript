const readline = require('readline-sync');
const { cadastrar, exibirRanking, jogar } = require('./usuarios');
const { iniciarJogo } = require('./jogo');

function mostrarMenu() {
    console.log('Bem-vindo ao jogo de adivinhação!');
    console.log('1 - Cadastrar Jogador');
    console.log('2 - Exibir Ranking');
    console.log('3 - Jogar');
    console.log('4 - Sair');
    return readline.questionInt('Escolha uma opção: ');
}

function main() {
    let opcao;
    do {
        opcao = mostrarMenu();

        switch (opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                exibirRanking();
                break;
            case 3:
                jogar();
                break;
            case 4:
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== 4);
}

main();
