const ler = require('readline-sync');
  
  let nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Mariana', 'Carlos', 'Julia', 'Rafael', 'Sofia', 'Felipe'];
  
  readline.question('Digite um nome para buscar: ', (nomeBuscar) => {
    if (nomes.includes(nomeBuscar)) {
      console.log("ACHEI");
    } else {
      console.log("NÃO ACHEI");
    }
    readline.close();
  });
  