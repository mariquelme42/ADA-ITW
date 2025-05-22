// Operadores aritméticos
let a = 10;
let b = 3;

let suma = a + b;
let resta = a -b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicacion: ", multiplicacion);
console.log("Division: ", division);
console.log("Modulo: ", modulo);

console.log('---------------------------------');

// Operadores de comparación
console.log(a > b);     // devuelve true -a es mayor que b
console.log(a < b);     // devuelve false -a no es menor que b
console.log(a === 10);     // devuelve true -a es esctrictamente igual a 10
console.log(a === "10");     // devuelve false -a (como number) no es estrictamente igual a "10"
console.log(a == "10");     // devuelve true -a es igual a "10", porrque no compara

console.log('---------------------------------');

// Operadores lógicos
console.log(true && flase); // devuelve false
