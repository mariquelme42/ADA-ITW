// Ejercicio 9 clase 10: Escribe un programa que calcule el Índice de Masa Corporal (IMC).

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese su peso en kilogramos
let peso = parseFloat(prompt('Ingresa tu peso en kilogramos: '));

// Pedir al usuario que ingrese su altura en metros
let altura = parseFloat(prompt('Ingresa tu altura en metros: '));

// Calcular el Índice de Masa Corporal (IMC)
let imc = peso / (altura ** 2);

// Mostrar el IMC al usuario
console.log('Tu Índice de Masa Corporal (IMC) es:', imc);