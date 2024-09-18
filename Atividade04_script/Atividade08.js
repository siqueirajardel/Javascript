const ler = require('readline-sync');

  let array = [];
  
  function contarPares() {
    let count = array.filter(num => num % 2 === 0).length;
    console.log(`O array possui ${count} números pares.`);
    readline.close();
  }
  
  function lerArray() {
    if (array.length < 10) {
      readline.question(`Digite o ${array.length + 1}º número: `, (numero) => {
        array.push(Number(numero));
        lerArray();
      });
    } else {
      contarPares();
    }
  }
  
  lerArray();
  