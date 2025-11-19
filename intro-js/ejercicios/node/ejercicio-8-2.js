// Ejercicio 2 clase 8: Verificar si un número es positivo, negativo o cero
// Escribe un programa que pida al usuario que ingrese un número, verifique si el número es positivo, negativo o igual a cero y muestre un mensaje indicando cuál es el caso

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un número
let numeroX = parseFloat(prompt('Ingresa un número: '));
let resultado = '';

// Verificar si el número es positivo, negativo o igual a cero
if (numeroX > 0) {
    resultado = 'positivo';
} else if (numeroX < 0) {
    resultado = 'negativo';
} else {
    resultado = 'igual a cero';
}

// Mostrar el precio final al usuario
console.log('El número es:', resultado);