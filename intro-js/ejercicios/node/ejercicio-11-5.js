// Ejercicio 5 calse 11: Arrays y Condicionales / Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array.

const prompt = require('prompt-sync')();

// Crear un array vacío para almacenar los nombres
let nombres = [];

// Solicitar al usuario ingresar 5 nombres
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingresa el nombre ${i + 1}: `);
    nombres.push(nombre);
}

// Solicitar al usuario ingresar un nombre para buscar
let nombreBuscado = prompt('Ingresa un nombre para buscar en la lista: ');

// Verificar si el nombre ingresado se encuentra en el array
if (nombres.includes(nombreBuscado)) {
    console.log(`El nombre "${nombreBuscado}" se encuentra en la lista.`);
} else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en la lista.`);
}

// Fin del programa