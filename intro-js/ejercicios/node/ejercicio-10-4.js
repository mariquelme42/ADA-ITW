// Ejercicio 4 clase 10: Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

// Declaración de variables
let verdadero = true; // Booleano
let texto = "Hola, mundo!"; // Cadena de texto
let numero = 42; // Número
let nada = null; // Valor nulo

// Operaciones y validaciones
// 1. Validar si la variable 'verdadero' es de tipo booleano
if (typeof verdadero === 'boolean') {  
    console.log("'verdadero' es de tipo booleano.");
} else {
    console.log("'verdadero' no es de tipo booleano.");
}

// 2. Concatenar la variable 'texto' con otra cadena
let nuevoTexto = texto + " ¿Cómo estás?";
console.log("Texto concatenado:", nuevoTexto);

// 3. Sumar 10 al valor de la variable 'numero'
let sumaNumero = numero + 10;
console.log("Suma de 'numero' + 10:", sumaNumero);

// 4. Verificar si la variable 'nada' es nula
if (nada === null) {
    console.log("'nada' es nula.");
} else {
    console.log("'nada' no es nula.");
}

// Resultado final de las variables
console.log("Valor de 'verdadero':", verdadero);
console.log("Valor de 'texto':", texto);
console.log("Valor de 'numero':", numero);
console.log("Valor de 'nada':", nada);
