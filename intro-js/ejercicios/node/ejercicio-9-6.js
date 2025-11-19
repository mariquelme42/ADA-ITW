// Ejercicio 6 clase 9: Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese su edad
let edad = parseInt(prompt("Por favor, ingresa tu edad: "));

// 2. Verificar si es mayor o menor de edad y mostrar el mensaje correspondiente
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
