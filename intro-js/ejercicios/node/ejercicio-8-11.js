// Ejercicio 8 clase 11: Definir una matriz de 10x10 de números conscutivos del 1 al 100 y generar dos funciones: la primera va a sumar los valores de una diagonal y la otra va a sumar los valores de la otra diagonal. Imprimir ambos resultados, que deben coincidir.

// Crear la matriz 10x10 con números del 1 al 100
const matriz = [];
let numero = 1;

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = numero++;
    }
}

// Función para sumar la diagonal principal
function sumarDiagonalPrincipal(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;
}

// Función para sumar la diagonal secundaria
function sumarDiagonalSecundaria(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][matriz.length - 1 - i];
    }
    return suma;
}

// Calcular las sumas de ambas diagonales
const sumaPrincipal = sumarDiagonalPrincipal(matriz);
const sumaSecundaria = sumarDiagonalSecundaria(matriz);

// Imprimir los resultados
console.log("Suma de la diagonal principal:", sumaPrincipal);
console.log("Suma de la diagonal secundaria:", sumaSecundaria);