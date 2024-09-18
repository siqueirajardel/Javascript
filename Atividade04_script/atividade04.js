const ler = require('readline-sync');

  let elementos = [];
  
  function lerElementos() {
    if (elementos.length < 5) {
      readline.question('Digite um elemento: ', (elemento) => {
        elementos.push(elemento);
        lerElementos();
      });
    } else {
      contarElemento();
    }
  }
  
  function contarElemento() {
    readline.question('Digite um elemento para contar: ', (elementoContar) => {
      let count = elementos.filter(el => el === elementoContar).length;
      console.log(`O elemento '${elementoContar}' aparece ${count} vezes no array.`);
      readline.close();
    });
  }
  
  lerElementos();
  