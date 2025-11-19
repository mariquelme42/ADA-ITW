// Ejercicio 2 clase 10: Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese su nombre, edad y peso
let nombre = prompt("Por favor, ingresa tu nombre: ");
let edad = prompt("Por favor, ingresa tu edad: ");
let peso = prompt("Por favor, ingresa tu peso (en kg): ");

// Mostrar un mensaje personalizado con la información ingresada
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);