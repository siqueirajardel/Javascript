const ler = require('readline-sync');
const { listarUser, cadUser, atualizarUser, listarUserPorId, excluirUser } = require('./User_system');

let check = true;

while (check) {
    
    console.log("-------------- Sistema de Cadastro de Usuarios --------------");
    console.log("-----------------Escolha as Opções Abaixo:----------------------");
    console.log("1. Adicionar Novo Usuario ---------------------------------------");
    console.log("2. Atualizar Usuario --------------------------------------------");
    console.log("3. Listar Usuarios -----------------------------------------------");
    console.log("4. Listar Usuarios por ID ----------------------------------------");
    console.log("5. Excluir Usuarios ----------------------------------------------");
    console.log("6. Sair do Sistema ----------------------------------------------");
    console.log("-----------------------------------------------------------------");
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
            console.log("Opção Inválida! tente novamente!!");
            break;
    }
}

console.log("Sistema Finalizado!");