const ler = require('readline-sync');

  readline.question('Digite seu nome: ', (nome) => {
    readline.question('Digite sua idade: ', (idade) => {
      let pessoa = {
        nome: nome,
        idade: idade
      };
      console.log("Nome da pessoa:");
      console.log(pessoa.nome);
      readline.close();
    });
  });
  