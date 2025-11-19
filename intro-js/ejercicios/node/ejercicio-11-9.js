// Ejercicio 9 clase 11: Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada.Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. c) Por último, es necesario tener el total de gastos realizados en el mes. Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto? d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron. Posibles matrices para comprobar los resultados:
// [1135, 2500, 900, 1600, 2800, 3650, 1100],
// [1750, 1890, 1900, 1300, 898, 1750, 2800],
// [1700, 1150, 1690, 1900, 1770, 4500, 2560],
// [800, 1250, 1430, 2100, 1980, 1270, 950 ]


const gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950 ]
];

// a) Total de gastos en una semana
function totalGastosSemana(semana) {
  let total = 0;
    for (let dia = 0; dia < gastos[semana].length; dia++) {
        total += gastos[semana][dia];
    }
    return total;
}

console.log("Total gastos semana 2:", totalGastosSemana(1)); // Semana 2 (índice 1)

// b) Total de gastos en un día particular
function totalGastosDia(dia) {
  let total = 0;
    for (let semana = 0; semana < gastos.length; semana++) {
        total += gastos[semana][dia];
    }
    return total;
}

console.log("Total gastos día 3:", totalGastosDia(2)); // Día 3 (índice 2)

// c) Total de gastos en el mes
function totalGastosMes() {
  let total = 0;
    for (let semana = 0; semana < gastos.length; semana++) {
        for (let dia = 0; dia < gastos[semana].length; dia++) {
            total += gastos[semana][dia];
        }
    }
    return total;
}

console.log("Total gastos mes:", totalGastosMes());

// d) Semana y día con más gastos
function semanaYDiaMasGastos() {
  let semanaMax = 0;
  let diaMax = 0;
  let maxGastoSemana = 0;
  let maxGastoDia = 0;
    for (let semana = 0; semana < gastos.length; semana++) {
        let totalSemana = 0;
        for (let dia = 0; dia < gastos[semana].length; dia++) {
            totalSemana += gastos[semana][dia];
            if (gastos[semana][dia] > maxGastoDia) {
                maxGastoDia = gastos[semana][dia];
                diaMax = dia;
            }
        }
        if (totalSemana > maxGastoSemana) {
            maxGastoSemana = totalSemana;
            semanaMax = semana;
        }
    }
    return { semanaMax: semanaMax + 1, diaMax: diaMax + 1 }; // +1 para ajustar a índice humano
}

const resultado = semanaYDiaMasGastos();
console.log("Semana con más gastos:", resultado.semanaMax);
console.log("Día con más gastos:", resultado.diaMax);