// Trabalhando com funcoes no Javascript - Utilizando Parâmetros

function dobro(num) {
   let result = num * 2;
   console.log("O dobro do número informado é " + result);
}
dobro(6);

function dobro(num) {
    return "O dobro do número informado é " + num * 2;
 }

 console.log(dobro(6));

 // Funcao para contar quantas letras tem um texto ou uma palavra

 function contar_txt(txt) {
    total = txt.length();
    console.log("O texto ou a palavra digitada contam " + total + "caracteres.");
 }

 let texto = "Era uma vez em Nova Lima...";

 contar_txt();