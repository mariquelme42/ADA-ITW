// Ejercicio 8 clase 9: Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();

// Solicitar al usuario las longitudes de los lados del triángulo
let ladoA = parseFloat(prompt("Ingresa la longitud del lado A del triángulo: "));
let ladoB = parseFloat(prompt("Ingresa la longitud del lado B del triángulo: "));
let ladoC = parseFloat(prompt("Ingresa la longitud del lado C del triángulo: "));

// Determinar el tipo de triángulo
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("El triángulo es equilátero.");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}  
