// Ejercicio 3 clase 8: Suma de dos números ingresados por el usuario
// Escribe un programa que pida al usuario que ingrese dos números, sume ambos números y muestre el resultado de la suma.


const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese dos números
let numeroX = parseFloat(prompt('Ingresa un número: '));

// Pedir al usuario que ingrese dos números
let numeroXX = parseFloat(prompt('Ingresa otro número: '));

// 3. Calcular la suma
let suma = (numeroX + numeroXX);

// Mostrar el resultado de la suma al usuario
console.log('El número es:', suma);