/* Consigna:
Crear un programa que simule un sistema de calificaciones basado en la nota de un estudiante (un valor numerico del 0 al 100). El programa lo que tiene que hacer es determinar si el estudiante ha reprobado, aprobado o ha obtenido una calificacion excelente, segun la siguientes condiciones:

- Si la nota es menor a 60, el estudiante ha reprobado
- Si la nota esta entre 60 y 89 (inclusive), el estudiante ha aprobado
- Si lanota es 90 o mayor, el estudiante ha obtenido una calificacion excelente.

Usar condicionales if, else if y else para mostrar el mensaje correspondiente en la consola.
*/

let nota = 95;

if (nota < 60) {
    console.log("Alumno reprobado.");
} else if (nota >= 60 && nota <= 89) {
    console.log("Estudiante aprobado.")
} else if (nota >= 90 && nota <= 100) {
    console.log("Calificación excelente")
}