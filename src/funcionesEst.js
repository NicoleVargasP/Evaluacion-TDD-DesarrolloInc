let horaEntrada = null;
let horaSalida = null;

function guardarHoraEntrada(fechaHoraEntrada) {
    horaEntrada = fechaHoraEntrada;
    return horaEntrada
}
function guardarHoraSalida(fechaHoraSalida) {
    horaSalida = fechaHoraSalida;
    return horaSalida
  //console.log("Se registro la hora de entrada: ", horaEntrada);
}
function calcularTarifa() {
  let tarifa = 10
  let numHoras = 2
  return tarifa * numHoras

}
export {guardarHoraEntrada, guardarHoraSalida, calcularTarifa};