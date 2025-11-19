// Ejercicio 7 clase 9: Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese su peso en kilogramos
const pesoKg = parseFloat(prompt('Por favor, ingresa tu peso en kilogramos: '));

// Convertir kilogramos a libras
const pesoLibras = pesoKg * 2.20462;

// Mostrar el resultado
console.log(`Tu peso en libras es: ${pesoLibras.toFixed(2)} lbs`);