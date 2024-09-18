const carrinhoDeCompras = {
    alimentos: [
        { nome: "Maçã", preco: 1.50, quantidade: 3 },
        { nome: "Pão", preco: 2.10, quantidade: 1 }
    ],
    eletronicos: [
        { nome: "Fone de Ouvido", preco: 35.90, quantidade: 1 }
    ]
};

let totalGeral = 0;

for (const categoria in carrinhoDeCompras) {
    let totalCategoria = 0;

    for (const produto of carrinhoDeCompras[categoria]) {
        const totalProduto = produto.preco * produto.quantidade;
        totalCategoria += totalProduto;
        totalGeral += totalProduto;
    }

    console.log(`Total ${categoria}: R$ ${totalCategoria.toFixed(2)}`);
}

console.log(`Total Geral: R$ ${totalGeral.toFixed(2)}`);
