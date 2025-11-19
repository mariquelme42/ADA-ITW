// Ejercicio 1 clase 8: Calcula el doble de un número
// Escribe un programa que solicite al usuario que ingrese un número cualquiera, calcule el doble de ese número y muestre el resultado en la consola


const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese dos números
let numero1 = parseFloat(prompt('Ingresa un número: '));
let numero2 = parseFloat(prompt('Ingresa otro número: '));

// Calcular el doble del número
let resultado = numeroX * 2;

// Mostrar el precio final al usuario
console.log('El doble del número que ingresaste es: ', resultado);