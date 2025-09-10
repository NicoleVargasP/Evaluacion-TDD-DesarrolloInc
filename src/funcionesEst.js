let horaEntrada = null;
let horaSalida = null;

function guardarHoraEntrada(fechaHoraEntrada) {
    horaEntrada = fechaHoraEntrada;
    return horaEntrada
}
function guardarHoraSalida() {
    horaSalida = "11:15";
    return horaSalida
  //console.log("Se registro la hora de entrada: ", horaEntrada);
}
export {guardarHoraEntrada, guardarHoraSalida};