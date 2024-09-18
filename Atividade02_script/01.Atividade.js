const ler = require('readline-sync');

        let gravidadeRelativa;
        let nomePlaneta;

const pesoNoPlaneta = (pesoNaTerra / 10) * gravidadeRelativa;
const pesoNaTerra = parseFloat(prompt("Digite o seu peso na Terra (em kg): "));
const resultado = calcularPesoNoPlaneta(pesoNaTerra, numeroPlaneta);

const numeroPlaneta = parseInt(prompt(`Escolha um planeta digitando o número correspondente:\n
1 - Mercúrio\n
2 - Vênus\n
3 - Marte\n
4 - Júpiter\n
5 - Saturno\n
6 - Urano\n
Digite o número do planeta: `), 10);

switch (numeroPlaneta) {
    case 1:
        nomePlaneta = "Mercúrio";
        gravidadeRelativa = 0.37;
        break;
    case 2:
        nomePlaneta = "Vênus";
        gravidadeRelativa = 0.88;
        break;
    case 3:
        nomePlaneta = "Marte";
        gravidadeRelativa = 0.38;
        break;
    case 4:
        nomePlaneta = "Júpiter";
        gravidadeRelativa = 2.64;
        break;
    case 5:
        nomePlaneta = "Saturno";
        gravidadeRelativa = 1.15;
        break;
    case 6:
        nomePlaneta = "Urano";
        gravidadeRelativa = 1.17;
        break;
    default:
        return "Número do planeta inválido.";
}


return `O seu peso em ${nomePlaneta} seria: ${pesoNoPlaneta.toFixed(2)} kg`;

console.log(resultado);
