const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acierto = false;

for (let intento = 1; intento <=3; intento++) {
  const adivinanza = parseInt(prompt(`Intento ${intento}: Adivina el número del 1 al 10`))
  // Estructura switch para evaluar la entrada del usuario
  switch (true) {
    case adivinanza === numeroSecreto:
      console.log(`🎉 ¡Felicitaciones! Adivinaste el número en el intento ${intento}`);
      acierto = true;
      break;
    case adivinanza < numeroSecreto:
      console.log("📉 Muy bajo... ¡intenta un número más alto!");
      break;
    case adivinanza > numeroSecreto:
      console.log("📈 Muy alto... ¡intenta un número más bajo!");
      break; 
  }
  // Operador ternario para cortar el bucle si acertó
  if (acierto ? true : false) break;
}
if (!acierto) {
    console.log(`😢 Lo siento... el número secreto era ${numeroSecreto}`);  
  }