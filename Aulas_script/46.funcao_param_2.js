// Trabalhando com funcoes no Javascript - Utilizando dois ou mais parâmetros

// Calcular valores
function somar(x, y) {
    return x + y;
}

console.log("A soma dos valores informados é ", somar(3, 4));

function clac(x, y, op) {
    if (op === 'somar') {
        return x + y;
    } else if (op === 'sub') {
        return x - y;
    } else if (op === 'mult') {
        return x * y;
    } else {
        return x / y;
    }
}

console.log("O cálculo dos valores informados é ", calc(5, 7, "mult"));