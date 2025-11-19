// Ejercicio 5 clase 8: saludo personalizado
// Escribe un programa que pida al usuario que ingrese su nombre y muestre un saludo personalizado usando el nombre ingresado

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese su nombre
let nombre = (prompt('Ingresa tu nombre: '));

// Mostrar el saludo personalizado
let saludo = 'Hola vos' + ' ' + nombre;
console.log(saludo);