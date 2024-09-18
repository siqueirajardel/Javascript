const usuarios = require('./User_bd');
const ler = require('readline-sync');

// Função para perguntar se deseja voltar ao menu principal
function voltarAoMenu() {
    const opcao = ler.question("Digite 'voltar' para retornar ao menu principal: ").toLowerCase();
    return opcao === 'voltar';
}

const cadUser = () => {
    let x = usuarios.length; 
    let id = x + 1;
    let nome = ler.question("Digite o nome do usuario: ");
    let cpf = ler.questionInt("Informe o CPF: ");
    let telefone = ler.questionInt("Digite o numero do telefone: ");
    let email = ler.questionEMail("Digite o e-mail: ");
    adicionarUsuario(id, nome, cpf, telefone, email);
};

const adicionarUsuario = (id, nome, cpf, telefone, email) => {
    usuarios.push({id: id, nome: nome, cpf: cpf, telefone: telefone, email: email});
    console.log("Usuario cadastrado com sucesso!!");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarUser = () => {
    console.log("--------------- Usuários Cadastrados -------------");
    usuarios.forEach(usuario => console.log(
        `ID: ${usuario.id} -------------
         Nome: ${usuario.nome}
         CPF: ${usuario.cpf}
         Telefone: ${usuario.telefone}
         E-mail: ${usuario.email}
         -------------------------------`
    ));
    console.log("--------------------------------------------------");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const atualizarUser = () => {
    let check = true;
  
    while (check) {
        let id = ler.questionInt("Informe o ID do usuario: ");
        let usuario = usuarios.find(user => user.id === id);
        if (usuario) {
            console.log(
                `ID: ${usuario.id} -------------
                 Nome: ${usuario.nome}
                 CPF: ${usuario.cpf}
                 Telefone: ${usuario.telefone}
                 E-mail: ${usuario.email}
                 -------------------------------`
            );
            let opt = ler.questionInt("Deseja alterar este usuario? 1.SIM - 2.NAO: ");
            if (opt === 1) {
                console.clear();
                attUsuario(id);
                check = false;
            } else {
                console.clear();
            }
        } else {
            console.clear();
            console.log("...");
            console.log("Usuario nao encontrado!!");
        }
    }
};

const attUsuario = (id) => {
    let usuario = usuarios.find(user => user.id === id);
    let attnome = ler.question(`Informe o novo nome do usuario [${usuario.nome}]: `);
    let attcpf = ler.questionInt(`Informe o novo CPF [${usuario.cpf}]: `);
    let atttel = ler.questionInt(`Informe o novo telefone [${usuario.telefone}]: `);
    let attemail = ler.questionEMail(`Informe o novo e-mail [${usuario.email}]: `);
    usuario.nome = attnome;
    usuario.cpf = attcpf;
    usuario.telefone = atttel;
    usuario.email = attemail;
    console.log("Usuário alterado com sucesso!!");
    console.log(
        `ID: ${usuario.id} -------------
         Nome: ${usuario.nome}
         CPF: ${usuario.cpf}
         Telefone: ${usuario.telefone}
         E-mail: ${usuario.email}
         -------------------------------`
    );
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarUserPorId = () => {
    let check = true;
  
    while (check) {
        let id = ler.questionInt("Informe o ID do usuario: ");
        let usuario = usuarios.find(user => user.id === id);
        if (usuario) {
            console.log(
                `ID: ${usuario.id} -------------
                 Nome: ${usuario.nome}
                 CPF: ${usuario.cpf}
                 Telefone: ${usuario.telefone}
                 E-mail: ${usuario.email}
                 -------------------------------`
            );
            let opt = ler.questionInt("Deseja buscar outro usuario? 1.SIM - 2.NAO: ");
            if (opt === 1) {
                console.clear();
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log("...");
            console.log("Usuario nao encontrado!!");
        }
    }
};

const excluirUser = () => {
    let check = true;
  
    while (check) {
        let id = ler.questionInt("Informe o ID do usuario: ");
        let usuario = usuarios.find(user => user.id === id);
        let id_ex = usuarios.findIndex(user => user.id === id);
        if (usuario) {
            console.log(
                `ID: ${usuario.id} -------------
                 Nome: ${usuario.nome}
                 CPF: ${usuario.cpf}
                 Telefone: ${usuario.telefone}
                 E-mail: ${usuario.email}
                 -------------------------------`
            );
            let opt = ler.questionInt("Tem certeza que deseja excluir este usuario? 1.SIM - 2.NAO: ");
            if (opt === 1) {
                usuarios.splice(id_ex, 1);
                console.log("Usuario excluído com sucesso!!");
                console.log("...");
                ler.question("Pressione Enter para voltar ao MENU");
                check = false;
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log("...");
            console.log("Usuario nao encontrado!!");
        }
    }
};

module.exports = { listarUser, cadUser, atualizarUser, listarUserPorId, excluirUser };
