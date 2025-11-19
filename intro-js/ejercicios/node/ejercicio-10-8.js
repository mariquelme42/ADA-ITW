// Ejercicio 8 clase 10: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese la temperatura en grados Celsius
const celsius = parseFloat(prompt('Ingrese la temperatura en grados Celsius: '));

// Convertir la temperatura a grados Fahrenheit
const fahrenheit = (celsius * 9/5) + 32;

// Mostrar el resultado
console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);