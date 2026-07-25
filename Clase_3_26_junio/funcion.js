//! Funciones base

function saludar() {
  console.log("Hola, bienvenido al gestor de tareas");
}

saludar(); //LLAMAR LA FUNCION

function saludarA(nombre) { //PARAMETRO
  console.log("Hola, " + nombre);
}

saludarA("Dayana"); //LLAMAR LA FUNCION CON ARGUMENTO
saludarA("Ana");
saludarA("Carlos");



//! Funciones con Return
console.log("Aqui empieza return");

function clasificar(prioridad) {
  if (prioridad > 3) {
    return "URGENTE";
  } else {
    return "normal";
  }
}

clasificar(3);
const resultado = clasificar(5);
console.log(resultado);


//! usando de verdad el return 

function clasificar(prioridad) {
  if (prioridad > 3) return "URGENTE";
  else return "normal";
}

function construirEtiqueta(titulo, prioridad) {
  const nivel = clasificar(prioridad);   // ← usa el RETURN de clasificar
  return titulo + " [" + nivel + "]";
}

console.log(construirEtiqueta("Pagar factura", 5));   // Pagar factura [URGENTE]
console.log(construirEtiqueta("Regar plantas", 2));   // Regar plantas [normal]