// Ejercicio 9 clase 9: Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI. 

const prompt = require('prompt-sync')();

// Definir la constante PI
const PI = 3.14159;

// Pedir al usuario que ingrese el radio del círculo
const radio = parseFloat(prompt('Ingresa el radio del círculo: '));

// Calcular el área y el perímetro del círculo
const area = PI * (radio ** 2);
const perimetro = 2 * PI * radio;

// Mostrar los resultados
console.log(`El área del círculo es: ${area}`);
console.log(`El perímetro del círculo es: ${perimetro}`);