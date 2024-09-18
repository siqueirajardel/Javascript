//  Trabalhando com funcoes no Javascript - Utilizando dois ou mais parâmetros

// Sistema de Conversão de Moedas

const ler = require('readline-sync');

(async () => {

const {defeault: cor } = await import('chalk');

const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12, IENE = 0.033;

function dolar(valor) {
    let result = valor / DOLAR;
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(result);
}
function euro(valor) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency', currency: 'USD'
    }).format(valor / EURO);
}
function libra(valor) {
    let result = valor / LIBRA;
    return new Intl.NumberFormat('en-GB', {
        style: 'currency', currency: 'USD'
    }).format(result);
}
function iene(valor) {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency', currency: 'JPY'
    }).format(valor / IENE);
}
function converterMoeda(valor, moeda) {
    
    switch (moeda) {
            case 1: // Dólar
            console.log(cor.green("O valor informado convertido para dólar é: "));
            console.log(cor.yellow(`=> ${dolar(valor)})`));
            break;
    
            case 2: // Euro
            console.log(cor.green("O valor informado convertido para euro é: "));
            console.log(cor.yellow(`=> ${euro(valor)})`));
            break;
                
            case 3: // Libra
            console.log(cor.green("O valor informado convertido para libra é: "));
            console.log(cor.yellow(`=> ${libra(valor)})`));
            break;

            case 4: // Iene
            console.log(cor.green("O valor informado convertido para iene é: "));
            console.log(cor.yellow(`=> ${iene(valor)})`));
            break;   

        default:
            break;
    }

}

function menu() {
    let valor = ler.questionFloat("Informe um valor em Reais: ");
    console.log("---------- Menu de Câmbio ------------");
    console.log("-- Selecione qual moeda deseja realizar a conversão --");
    console.log("1. DOLAR ------------");
    console.log("2. EURO ------------");
    console.log("3. LIBRA ------------");
    console.log("4. IENE ------------");
    let opt = ler.questionInt("=> ");
    converterMoeda(valor, opt);
}

menu();

})();