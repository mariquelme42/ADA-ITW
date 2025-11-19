// Ejercicio 4 clase 9: Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese su nombre
let nombreUsuario = (prompt('Ingresa tu nombre: '));

// 2. Definir nombre propio
const miNombre = 'Meh';

// 3. Verificar si los nombres coinciden y mostrar el resultado al usuario
if (nombreUsuario === miNombre) {
    console.log('¡Tenemos el mismo nombre!');
} else {
    console.log('Tu nombre es diferente al mío')
}