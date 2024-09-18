const ler = require('readline-sync');

function calcularPesoNoPlaneta(pesoNaTerra, numeroPlaneta) {
    let gravidadeRelativa;
    let nomePlaneta;

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

    const pesoNoPlaneta = (pesoNaTerra / 10) * gravidadeRelativa;
    return `O seu peso em ${nomePlaneta} seria: ${pesoNoPlaneta.toFixed(2)} kg`;
}

const pesoNaTerra = parseFloat(ler.question("Digite o seu peso na Terra (em kg): "));
const numeroPlaneta = parseInt(ler.question(`Escolha um planeta digitando o número correspondente:\n
1 - Mercúrio\n
2 - Vênus\n
3 - Marte\n
4 - Júpiter\n
5 - Saturno\n
6 - Urano\n
Digite o número do planeta: `), 10);

const resultado = calcularPesoNoPlaneta(pesoNaTerra, numeroPlaneta);
console.log(resultado);
