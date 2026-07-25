function indiceValido(lista, indice) {
  return Number.isInteger(indice) && indice >= 0 && indice < lista.length;
}

function horaOcupada(lista, hora) {
  return lista.some((cita) => cita.hora === hora);
}

function agendarCita(lista, cliente, servicio, hora) {
  if (cliente.trim() === "") return false;
  if (horaOcupada(lista, hora)) return false;
  lista.push({ cliente, servicio, hora, atendida: false });
  return true;
}

function atenderCita(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista[indice].atendida = true;
  return true;
}

function cancelarCita(lista, indice) {
  if (!indiceValido(lista, indice)) return false;
  lista.splice(indice, 1);
  return true;
}

module.exports = { horaOcupada, agendarCita, atenderCita, cancelarCita };
