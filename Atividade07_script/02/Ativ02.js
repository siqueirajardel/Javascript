const ler = require('readline-sync');

function calcularValorFinal(valorCompra, codigoComprador) {
    let desconto = 0;

    switch (codigoComprador) {
        case 2:
            desconto = 0.10;  // 10% de desconto para funcionários
            break;
        case 3:
            desconto = 0.05;  // 5% de desconto para clientes VIP
            break;
        default:
            desconto = 0;     // Sem desconto para clientes comuns
    }

    const valorFinal = valorCompra * (1 - desconto);
    console.log(`O valor total a ser pago é R$ ${valorFinal.toFixed(2)}`);
}

const valorCompra = parseFloat(ler.question("Digite o valor total da compra: "));
const codigoComprador = parseInt(ler.question("Digite o código do comprador (1 - Cliente comum, 2 - Funcionário, 3 - Cliente VIP): "));

calcularValorFinal(valorCompra, codigoComprador);
