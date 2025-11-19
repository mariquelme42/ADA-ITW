// saludar(); // ¡Hola!
// function saludar() {
//   console.log("Hola");
// }

saludar(); // ❌ Error: Cannot access 'saludar' before initialization
let saludar = function() {
  console.log("Hola");
}