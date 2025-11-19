// Ejercicio 2 clase 11: Do While / Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

// Definir la contraseña correcta
const contraseñaCorrecta = "1234";
let contraseñaIngresada;

// Pedir al usuario que ingrese la contraseña hasta que sea correcta
do {
    contraseñaIngresada = prompt("Ingresa la contraseña: ");
} while (contraseñaIngresada !== contraseñaCorrecta);

console.log("¡Contraseña correcta!");