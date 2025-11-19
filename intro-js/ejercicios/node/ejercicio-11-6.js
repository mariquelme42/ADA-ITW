// Ejercicio 6 clase 11: Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.


// Definir matriz
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4,],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

// Inicializar suma
let suma = 0;

// Recorrer matriz y sumar valores que cumplan la condición
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let valor = matriz[i][j];
        if (valor >= 10 && valor < 1000) {
            suma += valor;
        }
    }
}


// Mostrar resultado
console.log("La suma de los números entre 10 y 1000 es:", suma);