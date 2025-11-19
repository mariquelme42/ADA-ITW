// Ejercicio 7 clase 10: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola. Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea)

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese dos valores
let valorA = prompt('Ingresa el valor de A: ');
let valorB = prompt('Ingresa el valor de B: ');

// Mostrar los valores antes del intercambio
console.log('Antes del intercambio:');
console.log('A =', valorA);
console.log('B =', valorB);

// Intercambiar los valores usando una variable temporal
let temp = valorA;
valorA = valorB;
valorB = temp;

// Mostrar los valores después del intercambio
console.log('Después del intercambio:');
console.log('A =', valorA);
console.log('B =', valorB);