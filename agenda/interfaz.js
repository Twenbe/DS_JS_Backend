function mostrarMenu() {
  console.log("\n--- AGENDA DE CITAS ---");
  console.log("1. Agendar cita");
  console.log("2. Ver agenda");
  console.log("3. Atender cita");
  console.log("4. Cancelar cita");
  console.log("5. Salir");
}

function mostrarAgenda(lista) {
  if (lista.length === 0) {
    console.log("No hay citas registradas.");
    return;
  }

  let pendientes = 0;
  let atendidas = 0;

  for (let i = 0; i < lista.length; i++) {
    const cita = lista[i];
    let estado;
    if (cita.atendida === true) {
      estado = "[Atendida]";
      atendidas++;
    } else {
      estado = "[Pendiente]";
      pendientes++;
    }
    console.log((i + 1) + ". " + estado + " " + cita.hora + " - " + cita.cliente + " (" + cita.servicio + ")");
  }

  console.log("Resumen: " + pendientes + " pendientes, " + atendidas + " atendidas.");
}

module.exports = { mostrarMenu, mostrarAgenda };
