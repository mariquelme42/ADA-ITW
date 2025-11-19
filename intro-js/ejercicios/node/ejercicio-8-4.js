// Ejercicio 4 clase 8: Determinar si un número es par o impar
// Escribe un programa que pida al usuario que ingrese un número entero, determine si el número es par o impar y muestre un mensaje indicando cuál es el caso

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un número
let numeroX = parseFloat(prompt('Ingresa un número: '));
let resultado = '';

// Verificar si el número es par o impar
if (numeroX % 2 == 0 ) {
    resultado = 'El número es par';
} else {
    resultado = 'El número es impar';
}

// Mostrar el precio final al usuario
console.log(resultado);