// Ejercicio 4 clase 11: Ciclo For - Array / Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla.

const prompt = require('prompt-sync')();

// Crear un array para almacenar las notas
let notas = [];

// Pedir al usuario que ingrese la cantidad de estudiantes
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: "));

// Usar un ciclo for para registrar las notas de cada estudiante
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}: `));
    notas.push(nota); // Agregar la nota al array
}

// Mostrar las notas por pantalla
console.log("Las notas de los estudiantes son:", notas);