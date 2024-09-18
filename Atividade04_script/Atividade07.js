const ler = require('readline-sync');


  
  let array = [];
  
  function mostrarMenu() {
    console.log("\nMenu:");
    console.log("0 - Finalizar programa");
    console.log("1 - Mostrar lista na ordem direta");
    console.log("2 - Mostrar lista na ordem inversa");
    console.log("3 - Mostrar soma total dos valores");
    readline.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
        case '0':
          readline.close();
          break;
        case '1':
          console.log("Lista na ordem direta:", array);
          mostrarMenu();
          break;
        case '2':
          console.log("Lista na ordem inversa:", array.reverse());
          mostrarMenu();
          break;
        case '3':
          let soma = array.reduce((acc, curr) => acc + curr, 0);
          console.log("Soma total dos valores:", soma);
          mostrarMenu();
          break;
        default:
          console.log("Opção inválida. Escolha entre 0, 1, 2 ou 3.");
          mostrarMenu();
      }
    });
  }
  
  function lerArray() {
    if (array.length < 10) {
      readline.question(`Digite o ${array.length + 1}º número: `, (numero) => {
        array.push(Number(numero));
        lerArray();
      });
    } else {
      mostrarMenu();
    }
  }
  
  lerArray();
  