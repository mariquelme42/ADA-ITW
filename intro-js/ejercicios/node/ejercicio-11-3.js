// Ejercicio 3 clase 11: Ciclo For / Contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive).

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número X
let x = parseInt(prompt("Ingrese un número entero positivo X: "));

// Inicializar un contador para los números impares
let contadorImpares = 0;

// Ciclo for para contar los números impares desde 0 hasta X (inclusive)
for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) { // Verificar si el número es impar
        contadorImpares++; // Incrementar el contador si es impar
    }
}

// Mostrar el resultado
console.log(`La cantidad de números impares desde 0 hasta ${x} es: ${contadorImpares}`);

