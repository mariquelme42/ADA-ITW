// Ejercicio 3 clase 10: Validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima.

const prompt = require('prompt-sync')();

// Definir constantes para la edad mínima y máxima
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Solicitar la edad al usuario
let edad = parseInt(prompt('Por favor, ingrese su edad: '), 10);

// Validar la edad ingresada y mostrar el resultado
if (isNaN(edad)) {
    console.log('Entrada inválida. Por favor, ingrese un número válido para la edad.');
} else if (edad < EDAD_MINIMA) {
    console.log('Lo siento, debe tener al menos 18 años para participar en la encuesta.');
}
else if (edad > EDAD_MAXIMA) {
    console.log('Lo siento, la edad máxima permitida para participar en la encuesta es 99 años.');
}
else {
    console.log('Gracias por participar en la encuesta.');
}