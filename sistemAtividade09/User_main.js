const ler = require('readline-sync');
const { listarUser, cadUser, atualizarUser, listarUserPorId, excluirUser } = require('./User_system');
const usuarios = require('./User_bd');

// Função que realiza o login
function login() {
    const username = ler.question("Digite o seu login: ");
    const user = usuarios.find(u => u.nome.split(' ')[0] === username); // Verifica se o primeiro nome corresponde ao login

    if (user) {
        const cpfDigits = String(user.cpf).slice(0, 6); // Obtém os 6 primeiros dígitos do CPF
        const password = ler.question("Digite a sua senha (6 primeiros digitos do CPF): ");

        if (password === cpfDigits) {
            console.log(`Bem-vindo, ${user.nome}!\n`);
            return true;
        } else {
            console.log("Senha incorreta. Tente novamente.\n");
            return false;
        }
    } else {
        console.log("Login incorreto. Tente novamente.\n");
        return false;
    }
}

// Loop principal
let check = true;

while (check) {
    console.log("-------------- Sistema de Cadastro de Usuarios --------------");
    console.log("----------------- Escolha as Opcoes Abaixo: -----------------");
    console.log("1. Adicionar Novo Usuario -----------------------------------");
    console.log("2. Atualizar Usuario ----------------------------------------");
    console.log("3. Listar Usuarios ------------------------------------------");
    console.log("4. Listar Usuario por ID ------------------------------------");
    console.log("5. Excluir Usuario ------------------------------------------");
    console.log("6. Sair do Sistema ------------------------------------------");
    console.log("--------------------------------------------------------------");

    if (login()) {
        let opt = ler.questionInt("=> ");

        switch (opt) {
            case 1:
                console.clear();
                cadUser();
                break;
            case 2:
                console.clear();
                atualizarUser();
                break;
            case 3:
                console.clear();
                listarUser();
                break;
            case 4:
                console.clear();
                listarUserPorId();
                break;
            case 5:
                console.clear();
                excluirUser();
                break;
            case 6:
                check = false;
                break;
            default:
                console.log("Opção Invalida! Tente novamente!!");
                break;
        }
    }
}

console.log("Sistema Finalizado!");
