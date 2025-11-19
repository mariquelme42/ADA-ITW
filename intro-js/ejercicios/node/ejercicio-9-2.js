// Ejercicio 2 clase 9: Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes. 

const prompt = require('prompt-sync')();

// Definir las contantes del rango
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 100;

// Pedir al usuario que ingrese un número
let numero = parseFloat(prompt('Ingresa un número: '));

// Verificar si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    resultado = 'El número está dentro del rango';
} else {
    resultado = 'El número no está dentro del rango';
}

// Mostrar el resultado al usuario
console.log(resultado);