const matriz = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0));

for (let i = 0; i < 10; i++) {
    matriz[i][i] = 1; // diagonal esquerda
    matriz[i][9 - i] = 2; // diagonal direita
}

console.table(matriz);
