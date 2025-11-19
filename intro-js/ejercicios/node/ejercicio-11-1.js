// Ejercicio 1 clase 11: While / Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese números
let suma = 0;
while (true) {
    let numero = parseFloat(prompt("Ingresa un número (negativo para terminar): "));
    if (numero < 0) {
        break;
    }
    suma += numero;
}