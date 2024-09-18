const ler = require('readline-sync');

const atividade5 = () => {
    let funcionarios = [];

    while (true) {
        let nome = ler.question('Digite o nome do funcionário (ou "fim" para encerrar): ');
        if (nome.toLowerCase() === 'fim') break;

        let departamento = ler.question('Digite o departamento do funcionário: ');
        let cargo = ler.question('Digite o cargo do funcionário: ');
        let anosServico = parseInt(ler.question('Digite os anos de serviço do funcionário: '));

        funcionarios.push({ nome, departamento, cargo, anosServico });
    }

    console.log("Lista de funcionários registrados:");
    console.log(funcionarios);

    while (true) {
        let buscarNome = ler.question('Digite o nome do funcionário para buscar (ou "fim" para encerrar busca): ');
        if (buscarNome.toLowerCase() === 'fim') break;

        let funcionarioEncontrado = funcionarios.find(funcionario => funcionario.nome === buscarNome);
        if (funcionarioEncontrado) {
            console.log("Funcionário encontrado:");
            console.log(funcionarioEncontrado);
        } else {
            console.log(`Funcionário ${buscarNome} não encontrado.`);
        }
    }
}


