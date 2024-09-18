const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arrayResultado = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    if (i % 2 === 0) {
        arrayResultado.push(arrayOriginal[i] / 2);
    } else {
        arrayResultado.push(arrayOriginal[i] * 3);
    }
}

console.log("Array Original:", arrayOriginal);
console.log("Array Resultado:", arrayResultado);
