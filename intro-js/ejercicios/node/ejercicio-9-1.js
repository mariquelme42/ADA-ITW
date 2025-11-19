// Ejercicio 1 clase 9: Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese dos números
let numero1 = parseFloat(prompt('Ingresa un número: '));
let numero2 = parseFloat(prompt('Ingresa otro número: '));

// Verificar si el número es mayor o son iguales
if (numero1 > numero2) {
    resultado = 'El número mayor es ' + numero1;
} else {
    resultado = 'El número mayor es ' + numero2;
}

// Mostrar el resultado al usuario
console.log(resultado);