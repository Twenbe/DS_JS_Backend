const prompt = require("prompt-sync")();
const citas = require("./citas.js");
const interfaz = require("./interfaz.js");

const agenda = [];

while (true) {
  interfaz.mostrarMenu();
  console.log(" ");
  console.log("==============================");
  console.log(" ");

  const entrada = prompt("Elige una opción: ");
  const opcion = entrada.trim().toLowerCase();

  switch (opcion) {
    case "1": {
      const cliente = prompt("Cliente: ");
      if (cliente.trim() === "") {
        console.log("El nombre del cliente no puede estar vacío.");
        break;
      }
      const servicio = prompt("Servicio: ");
      const hora = prompt("Hora (ejemplo 10:00): ");
      if (citas.horaOcupada(agenda, hora)) {
        console.log("Ya existe una cita agendada a esa hora.");
        break;
      }
      citas.agendarCita(agenda, cliente, servicio, hora);
      console.log("Cita agendada.");
      break;
    }
    case "2":
      interfaz.mostrarAgenda(agenda);
      break;
    case "3": {
      const num = Number(prompt("Número de cita a atender: "));
      const atendida = citas.atenderCita(agenda, num - 1);
      if (atendida === true) {
        console.log("Cita marcada como atendida.");
      } else {
        console.log("Esa cita no existe.");
      }
      break;
    }
    case "4": {
      const num = Number(prompt("Número de cita a cancelar: "));
      const cancelada = citas.cancelarCita(agenda, num - 1);
      if (cancelada === true) {
        console.log("Cita cancelada.");
      } else {
        console.log("Esa cita no existe.");
      }
      break;
    }
    case "5":
    case "salir":
      console.log("Hasta luego.");
      break;
    default:
      console.log("Opción no válida.");
  }

  if (opcion === "5" || opcion === "salir") break;
}
