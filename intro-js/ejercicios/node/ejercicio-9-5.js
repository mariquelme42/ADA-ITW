// Ejercicio 5 clase 9: Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let num3 = parseFloat(prompt("Ingresa el tercer número: "));

let mayor;

// Comparar los tres números
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

// Mostrar el resultado
console.log("El número mayor es: " + mayor);