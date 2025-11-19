// Ejercicio 10 clase 9: Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error. 

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un número del 1 al 7
let numeroDia = parseInt(prompt('Ingresa un número del 1 al 7: '));
let diaSemana = '';

// Determinar el día de la semana correspondiente
switch (numeroDia) {    
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';  
        break; 
    case 3:
        diaSemana = 'Miércoles';  
        break; 
    case 4:
        diaSemana = 'Jueves';  
        break;
    case 5:
        diaSemana = 'Viernes';  
        break;
    case 6:
        diaSemana = 'Sábado';  
        break;
    case 7:
        diaSemana = 'Domingo';  
        break;
    default:
        diaSemana = 'Error: Número fuera de rango. Por favor ingresa un número del 1 al 7.';
        break;
}  

// Mostrar el día de la semana o el mensaje de error al usuario
console.log(diaSemana);